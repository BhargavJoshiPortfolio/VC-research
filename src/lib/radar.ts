// Dependency-free radar chart. Used at build time (Astro component) and in the browser (compare page).
import { DIMENSIONS } from './dimensions';

export interface RadarSeries {
  label: string;
  values: number[]; // one per dimension, 1 to 5, in DIMENSIONS order
  color: string;
}

export function radarSVG(series: RadarSeries[], opts: { size?: number; labels?: boolean } = {}): string {
  const size = opts.size ?? 320;
  const labels = opts.labels ?? true;
  const pad = labels ? 64 : 14;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - pad;
  const n = DIMENSIONS.length;
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const pt = (i: number, v: number) => {
    const rad = (v / 5) * r;
    return [cx + rad * Math.cos(angle(i)), cy + rad * Math.sin(angle(i))];
  };

  let g = '';
  for (let ring = 1; ring <= 5; ring++) {
    const pts = DIMENSIONS.map((_, i) => pt(i, ring).map((x) => x.toFixed(1)).join(',')).join(' ');
    g += `<polygon points="${pts}" class="radar-ring${ring === 5 ? ' radar-ring-outer' : ''}"/>`;
  }
  DIMENSIONS.forEach((d, i) => {
    const [x, y] = pt(i, 5);
    g += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="radar-axis"/>`;
    if (labels) {
      const [lx, ly] = [cx + (r + 18) * Math.cos(angle(i)), cy + (r + 18) * Math.sin(angle(i))];
      const anchor = Math.abs(Math.cos(angle(i))) < 0.2 ? 'middle' : Math.cos(angle(i)) > 0 ? 'start' : 'end';
      const dy = Math.sin(angle(i)) > 0.5 ? 10 : Math.sin(angle(i)) < -0.5 ? -2 : 4;
      g += `<text x="${lx.toFixed(1)}" y="${(ly + dy).toFixed(1)}" text-anchor="${anchor}" class="radar-label">${d.short}</text>`;
    }
  });
  for (const s of series) {
    const pts = s.values.map((v, i) => pt(i, v).map((x) => x.toFixed(1)).join(',')).join(' ');
    g += `<polygon points="${pts}" fill="${s.color}" fill-opacity="0.18" stroke="${s.color}" stroke-width="2" stroke-linejoin="round"/>`;
    s.values.forEach((v, i) => {
      const [x, y] = pt(i, v);
      g += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="${s.color}"/>`;
    });
  }
  const aria = series.map((s) => `${s.label}: ${DIMENSIONS.map((d, i) => `${d.short} ${s.values[i]}`).join(', ')}`).join('; ');
  return `<svg class="radar" viewBox="0 0 ${size} ${size}" role="img" aria-label="Radar chart. ${aria}" xmlns="http://www.w3.org/2000/svg">${g}</svg>`;
}
