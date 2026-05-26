import type { Locale } from './types';
import { publications } from './publications';
import { awards } from './awards';
import { grants } from './grants';
import { news, type NewsKind } from './news';
import { pubSlug } from './util';

export type RecentItem = {
  /** Normalized to YYYY-MM-DD (or YYYY-MM-01 if only month is known). */
  date: string;
  kind: NewsKind;
  /** Already localized to the requested locale. */
  title: string;
  detail?: string;
  href?: string;
};

function toIso(year: number, month?: number): string {
  return `${year}-${String(month ?? 1).padStart(2, '0')}-01`;
}

function padDate(date: string): string {
  // Accept YYYY-MM or YYYY-MM-DD; normalize to YYYY-MM-DD for sort comparison.
  const parts = date.split('-');
  const y = parts[0];
  const m = (parts[1] ?? '01').padStart(2, '0');
  const d = (parts[2] ?? '01').padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Merge publications + awards + grants + manual `news.ts` and return the
 *  most recent N items, sorted newest first. */
export function buildRecent(locale: Locale, limit = 4): RecentItem[] {
  const items: RecentItem[] = [];

  for (const p of publications) {
    items.push({
      date: toIso(p.year, p.month),
      kind: 'paper',
      title: p.title,
      detail: locale === 'en' && p.venueEn ? p.venueEn : p.venue,
      href: `/p/${pubSlug(p)}/`,
    });
  }

  for (const a of awards) {
    items.push({
      date: padDate(a.date),
      kind: 'award',
      title: a.name[locale],
      detail: a.organization[locale],
    });
  }

  for (const g of grants) {
    // Map the grant category to a more specific news kind so HPC allocations
    // aren't shown as "助成金/Grant" in the Recent feed.
    const kind: NewsKind =
      g.category === 'hpc' ? 'hpc' : g.category === 'fellowship' ? 'fellowship' : 'grant';
    items.push({
      date: padDate(g.start),
      kind,
      title: g.title[locale],
      detail: g.funder[locale],
    });
  }

  for (const item of news) {
    items.push({
      date: padDate(item.date),
      kind: item.kind,
      title: item.title[locale],
      detail: item.detail?.[locale],
      href: item.href,
    });
  }

  items.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return items.slice(0, limit);
}
