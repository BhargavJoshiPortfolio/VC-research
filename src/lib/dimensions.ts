// Scoring framework shared by the whole site (scoreboard, radar charts, scorecard page).
export type DimKey = 'team' | 'insight' | 'product' | 'evidence' | 'market' | 'model';

export interface Dimension {
  key: DimKey;
  label: string;
  short: string;
  weight: number; // default weight in percent; the six sum to 100
  asks: string;
  low: string;
  high: string;
}

export const DIMENSIONS: Dimension[] = [
  {
    key: 'team',
    label: 'Team',
    short: 'Team',
    weight: 25,
    asks: 'Why these people, for this problem? Track record, completeness, speed, cohesion.',
    low: 'Single founder in a hard problem, unverifiable background, obvious gaps.',
    high: 'Deep founder-market fit, prior relevant outcomes, complementary skills, proven speed.',
  },
  {
    key: 'insight',
    label: 'Problem and insight',
    short: 'Insight',
    weight: 20,
    asks: 'Is the problem painful and paid for, and what non-obvious insight explains why now?',
    low: 'Nice-to-have problem, generic pitch, no reason it could not have been solved earlier.',
    high: 'Urgent, frequent, budgeted problem with a sharp, specific insight and a clear timing driver.',
  },
  {
    key: 'product',
    label: 'Product and technology defensibility',
    short: 'Technology',
    weight: 20,
    asks: 'What exists today, and how long would a funded competitor need to catch up?',
    low: 'Built on commodity components, a funded rival could match it in months.',
    high: 'Hard-to-copy technology, IP, data, process know-how or regulatory position, with independent validation.',
  },
  {
    key: 'evidence',
    label: 'Evidence and traction',
    short: 'Evidence',
    weight: 15,
    asks: 'What proof exists for the stage: paying customers, usage depth, data, validated milestones?',
    low: 'Claims only; no customers, trials or data visible.',
    high: 'Paid customers or strong trial data, named references, verified metrics.',
  },
  {
    key: 'market',
    label: 'Market and wedge',
    short: 'Market',
    weight: 10,
    asks: 'Is there a winnable beachhead and a path to a market large enough to matter to a fund?',
    low: 'Small or unclear market, no credible expansion path.',
    high: 'Sharp wedge with a bottom-up case for a very large market.',
  },
  {
    key: 'model',
    label: 'Business model and financing path',
    short: 'Model',
    weight: 10,
    asks: 'How does it make money, what does scale cost, and does the round reach the next milestone?',
    low: 'Unclear monetisation, heavy capital needs, runway short of the next value inflection.',
    high: 'Clear unit economics, capital-efficient path, round matched to a defined next milestone.',
  },
];

export type Scores = Record<DimKey, number>;

export function normaliseWeights(w: Record<DimKey, number>): Record<DimKey, number> {
  const total = DIMENSIONS.reduce((s, d) => s + (w[d.key] || 0), 0) || 1;
  const out = {} as Record<DimKey, number>;
  for (const d of DIMENSIONS) out[d.key] = (w[d.key] || 0) / total;
  return out;
}

export function defaultWeights(): Record<DimKey, number> {
  const out = {} as Record<DimKey, number>;
  for (const d of DIMENSIONS) out[d.key] = d.weight;
  return out;
}

export function weightedScore(scores: Scores, weights: Record<DimKey, number> = defaultWeights()): number {
  const n = normaliseWeights(weights);
  return DIMENSIONS.reduce((s, d) => s + scores[d.key] * n[d.key], 0);
}

export const CATEGORIES = [
  { id: 'Health and life sciences', short: 'Health', color: '#b4496b' },
  { id: 'Robotics and automation', short: 'Robotics', color: '#3b6fb6' },
  { id: 'Food and agriculture', short: 'Food and agri', color: '#5a8a3c' },
  { id: 'Energy, mobility and space', short: 'Energy and space', color: '#c07a1d' },
  { id: 'Software and fintech', short: 'Software', color: '#6b52a3' },
] as const;

export function categoryColor(id: string): string {
  return CATEGORIES.find((c) => c.id === id)?.color ?? '#777';
}

export const VERDICTS = [
  { id: 'Invest', slug: 'invest', meaning: 'Strong on team and insight, credible path to a fund-returning outcome, risks understood.' },
  { id: 'Invest, conditional', slug: 'conditional', meaning: 'Attractive, but depends on named diligence items such as customer references or IP ownership.' },
  { id: 'Watch', slug: 'watch', meaning: 'Interesting; revisit when a specific trigger occurs (a pilot converts, a trial reads out, a seed round lands).' },
  { id: 'Pass', slug: 'pass', meaning: 'Not for now. The single most decisive reason is stated.' },
] as const;

export function verdictSlug(id?: string): string {
  return VERDICTS.find((v) => v.id === id)?.slug ?? 'pending';
}

// Rounds half up so 3.175 shows as 3.18 (plain toFixed would show 3.17 because of binary floating point).
export function fmt(x: number, digits = 2): string {
  const f = Math.pow(10, digits);
  return (Math.round(x * f + 1e-9) / f).toFixed(digits);
}
