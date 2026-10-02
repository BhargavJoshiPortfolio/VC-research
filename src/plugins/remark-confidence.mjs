// Turns the confidence tags used in the theses into small badges:
//   [V] Verified   [R] Reported   [C] Claimed   [E] Estimate
// Also handles table cells whose whole content is one letter (the "Tag" columns).
const LABELS = { V: 'Verified', R: 'Reported', C: 'Claimed', E: 'Estimate' };
const TAG = /\[(V|R|C|E)(?:,\s*([^\]]*))?\]/g;

function badge(letter, extra) {
  const title = extra ? `${LABELS[letter]}, ${extra}` : LABELS[letter];
  return {
    type: 'html',
    value: `<span class="conf conf-${letter}" title="${title}" aria-label="${title}">${letter}</span>`,
  };
}

function splitText(value) {
  const out = [];
  let last = 0;
  for (const m of value.matchAll(TAG)) {
    if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
    out.push(badge(m[1], m[2]));
    last = m.index + m[0].length;
  }
  if (last === 0) return null;
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

function walk(node) {
  if (!node.children) return;
  if (node.type === 'tableCell' && node.children.length === 1 && node.children[0].type === 'text') {
    const t = node.children[0].value.trim();
    if (/^(V|R|C|E)$/.test(t)) {
      node.children = [badge(t)];
      return;
    }
  }
  const next = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      const parts = splitText(child.value);
      if (parts) next.push(...parts);
      else next.push(child);
    } else {
      walk(child);
      next.push(child);
    }
  }
  node.children = next;
}

export function remarkConfidence() {
  return (tree) => walk(tree);
}
