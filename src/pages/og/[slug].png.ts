import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import { allCompanies, isScored, scoreOf } from '../../lib/companies';
import { categoryColor } from '../../lib/dimensions';
import { SITE } from '../../config';

const fontDir = path.join(process.cwd(), 'node_modules', '@fontsource', 'inter', 'files');
const fonts = [
  { name: 'Inter', data: fs.readFileSync(path.join(fontDir, 'inter-latin-400-normal.woff')), weight: 400 as const, style: 'normal' as const },
  { name: 'Inter', data: fs.readFileSync(path.join(fontDir, 'inter-latin-700-normal.woff')), weight: 700 as const, style: 'normal' as const },
];

const INK = '#1d1c1a';
const MUTED = '#67635a';
const GREEN = '#1f4d3f';
const VERDICT_COLOR: Record<string, string> = {
  Invest: '#1f7a4d',
  'Invest, conditional': '#a86a00',
  Watch: '#3b6fb6',
  Pass: '#b0413e',
};

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style: { display: 'flex', ...style }, children },
});
const clip = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);

export async function getStaticPaths() {
  const list = await allCompanies();
  return [{ params: { slug: 'default' } }, ...list.map((c) => ({ params: { slug: c.id } }))];
}

export const GET: APIRoute = async ({ params }) => {
  const list = await allCompanies();
  const c = list.find((x) => x.id === params.slug);

  let title: string;
  let sub: string;
  let footerLeft: unknown[];
  let footerRight: unknown;

  if (c) {
    title = c.data.name;
    sub = clip(c.data.offering, 130);
    const color = categoryColor(c.data.category);
    footerLeft = [
      h('div', { width: 16, height: 16, borderRadius: 8, background: color, marginRight: 12, marginTop: 8 }),
      h('div', { fontSize: 28, color: MUTED }, `${c.data.category}  ·  ${c.data.hq.city}, ${c.data.hq.country}  ·  ${c.data.round.label}`),
    ];
    if (isScored(c)) {
      const v = c.data.verdict!;
      footerRight = h('div', { alignItems: 'center' }, [
        h('div', { fontSize: 28, fontWeight: 700, color: VERDICT_COLOR[v], border: `3px solid ${VERDICT_COLOR[v]}`, borderRadius: 40, padding: '6px 22px', marginRight: 20 }, v),
        h('div', { fontSize: 44, fontWeight: 700, color: INK }, `${scoreOf(c)!.toFixed(1)} / 5`),
      ]);
    } else {
      footerRight = h('div', { fontSize: 26, color: MUTED, border: `2px dashed ${MUTED}`, borderRadius: 40, padding: '6px 22px' }, 'Research pending');
    }
  } else {
    title = SITE.name;
    sub = 'Venture-style investment theses on early-stage European companies with real technology.';
    footerLeft = [h('div', { fontSize: 28, color: MUTED }, 'Methodology  ·  Scorecard  ·  Deep dives  ·  Verdicts')];
    footerRight = h('div', { fontSize: 28, color: MUTED }, SITE.author);
  }

  const tree = h('div', { width: 1200, height: 630, background: '#faf8f3', fontFamily: 'Inter' }, [
    h('div', { width: 18, height: 630, background: GREEN }),
    h('div', { flexDirection: 'column', justifyContent: 'space-between', padding: '56px 72px', flex: 1 }, [
      h('div', { fontSize: 24, fontWeight: 700, letterSpacing: 4, color: GREEN, textTransform: 'uppercase' }, SITE.name),
      h('div', { flexDirection: 'column' }, [
        h('div', { fontSize: title.length > 24 ? 72 : 96, fontWeight: 700, color: INK, lineHeight: 1.05, marginBottom: 24 }, title),
        h('div', { fontSize: 34, color: MUTED, lineHeight: 1.3 }, sub),
      ]),
      h(
        'div',
        c ? { flexDirection: 'column' } : { justifyContent: 'space-between', alignItems: 'center' },
        [h('div', { alignItems: 'flex-start', marginBottom: c ? 22 : 0 }, footerLeft), footerRight],
      ),
    ]),
  ]);

  const svg = await satori(tree as any, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
