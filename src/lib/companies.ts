import { getCollection, type CollectionEntry } from 'astro:content';
import { DIMENSIONS, weightedScore, categoryColor, type Scores } from './dimensions';

export type Company = CollectionEntry<'companies'>;

export async function allCompanies(): Promise<Company[]> {
  const list = await getCollection('companies');
  return list.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

export function isScored(c: Company): boolean {
  return !!c.data.scores && !!c.data.verdict;
}

export function scoreOf(c: Company): number | null {
  return c.data.scores ? weightedScore(c.data.scores as Scores) : null;
}

export function scoreValues(c: Company): number[] {
  return DIMENSIONS.map((d) => (c.data.scores as Scores)[d.key]);
}

/** Plain-object version of the scored companies, embedded as JSON for the client-side widgets. */
export function clientData(list: Company[], base: string) {
  return list
    .filter(isScored)
    .map((c) => ({
      slug: c.id,
      name: c.data.name,
      category: c.data.category,
      color: categoryColor(c.data.category),
      verdict: c.data.verdict,
      scores: c.data.scores,
      round: c.data.round.label,
      hq: `${c.data.hq.city}, ${c.data.hq.country}`,
      href: `${base}/companies/${c.id}/`,
    }));
}
