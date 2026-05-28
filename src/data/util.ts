import type { Publication } from './types';

/** FNV-1a 32-bit hash. Stable across runs, fits in base-36. */
function fnv1a(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

/** Deterministic slug for a publication's detail page. Stable across reorderings. */
export function pubSlug(pub: Publication): string {
  return `${pub.year}-${fnv1a(pub.title).toString(36).slice(0, 7)}`;
}

const SELF_TOKENS = ['木村 優介', '木村優介', 'Yusuke Kimura'];

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/** Escape an author string, then wrap the site owner's name in <strong> so
 *  their authorship position is scannable. Returns HTML (use with set:html).
 *  Source data is static, but escaping keeps this safe if that changes. */
export function highlightSelf(authors: string): string {
  let out = escapeHtml(authors);
  for (const token of SELF_TOKENS) {
    out = out.replaceAll(token, `<strong>${token}</strong>`);
  }
  return out;
}

/** Split a "First Last, First Last, ..." style author string into entries. */
export function splitAuthors(authors: string): string[] {
  return authors
    .split(/[,、]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Extract `{first, last}` from a free-form pages string ONLY when it ends in
 *  a clean numeric range like `…1-6` or `…24–33`. Returns null for things like
 *  `22(J)`, `A23-4`, `1L-07`, `D-5-6` that aren't actually page ranges. */
export function parsePageRange(pages?: string): { first: string; last: string } | null {
  if (!pages) return null;
  const m = pages.match(/(?:^|[\s,:])(?<first>\d+)\s*[-–]\s*(?<last>\d+)\s*$/);
  return m?.groups ? { first: m.groups.first, last: m.groups.last } : null;
}

/** Tight check for a PDF URL: extension `.pdf` at end of path, before query/hash. */
export function isPdfUrl(url: string | null | undefined): url is string {
  return !!url && /\.pdf(?:[?#]|$)/i.test(url);
}

/** BibTeX-safe field value: braces and backslashes inside a `{...}` group. */
function bibtexEscape(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/[{}]/g, '\\$&');
}

export function bibtexEntry(pub: Publication, venueText: string): string {
  const key = `kimura${pub.year}${pubSlug(pub).split('-')[1]}`;
  const entryType = pub.type === 'journal' ? '@article' : '@inproceedings';
  const fields: [string, string][] = [];
  fields.push(['title', bibtexEscape(pub.title)]);
  fields.push(['author', bibtexEscape(pub.authors).replace(/,\s*/g, ' and ')]);
  if (pub.type === 'journal') fields.push(['journal', bibtexEscape(venueText)]);
  else fields.push(['booktitle', bibtexEscape(venueText)]);
  fields.push(['year', String(pub.year)]);
  if (pub.month) fields.push(['month', String(pub.month)]);
  if (pub.pages) fields.push(['pages', bibtexEscape(pub.pages)]);
  if (pub.doi) fields.push(['doi', pub.doi]);
  const lines = fields.map(([k, v]) => `  ${k.padEnd(9)} = {${v}}`).join(',\n');
  return `${entryType}{${key},\n${lines},\n}`;
}
