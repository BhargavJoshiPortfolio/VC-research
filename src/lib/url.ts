// Prefixes site-relative paths with the deployment base (GitHub Pages serves project sites from /<repo>/).
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}
