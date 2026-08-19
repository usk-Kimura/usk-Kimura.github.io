import type { Locale } from './types';
import { publications } from './publications';
import { awards } from './awards';
import { grants } from './grants';
import { news, type NewsKind } from './news';
import { pubSlug } from './util';
import { L, localizePath } from '~/i18n/locale';

export type ActivityItem = {
  /** Normalized to YYYY-MM-DD (YYYY-MM-01 when only the month is known).
   *  Used for sorting and for the `datetime` attribute. */
  date: string;
  /** Source date at its original granularity, so a month-only entry is not
   *  rendered as if the exact day were known. */
  display: string;
  /** Final day of a multi-day event, if any. */
  endDate?: string;
  kind: NewsKind;
  /** Already localized to the requested locale. */
  title: string;
  detail?: string;
  href?: string;
  /** True when `href` points off-site. */
  external?: boolean;
};

function toIso(year: number, month?: number, day?: number): string {
  return `${year}-${String(month ?? 1).padStart(2, '0')}-${String(day ?? 1).padStart(2, '0')}`;
}

/** Accept `YYYY-MM` or `YYYY-MM-DD`; normalize to `YYYY-MM-DD` for sorting. */
function padDate(date: string): string {
  const [y, m = '01', d = '01'] = date.split('-');
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
}

/**
 * One merged feed of everything that happened (or is about to): manual news
 * entries, publications, awards, and funding. Newest first.
 *
 * Future-dated entries sort to the top, which is deliberate — an upcoming talk
 * is the most interesting thing on the page.
 */
export function buildActivity(locale: Locale, limit = 6): ActivityItem[] {
  const items: ActivityItem[] = [];

  for (const p of publications) {
    const display = p.month
      ? `${p.year}-${p.month}${p.day ? `-${p.day}` : ''}`
      : String(p.year);
    items.push({
      date: toIso(p.year, p.month, p.day),
      display,
      kind: 'paper',
      title: p.title,
      detail: locale === 'ja' ? p.venue : (p.venueEn ?? p.venue),
      href: localizePath(`/p/${pubSlug(p)}/`, locale),
    });
  }

  // A hand-written news entry about an award or grant is a better headline
  // than the record itself, so let it win rather than showing both.
  const announced = new Set(news.map((n) => n.href).filter(Boolean));

  for (const a of awards) {
    if (a.link?.href && announced.has(a.link.href)) continue;
    items.push({
      date: padDate(a.date),
      display: a.date,
      kind: 'award',
      title: L(a.name, locale),
      detail: L(a.organization, locale),
    });
  }

  for (const g of grants) {
    if (g.url && announced.has(g.url)) continue;
    // Map the grant category onto a news kind so a compute allocation isn't
    // announced as a "Grant".
    const kind: NewsKind =
      g.category === 'hpc' ? 'hpc' : g.category === 'fellowship' ? 'fellowship' : 'grant';
    items.push({
      date: padDate(g.start),
      display: g.start,
      kind,
      title: L(g.title, locale),
      detail: L(g.funder, locale),
      href: g.url,
      external: Boolean(g.url),
    });
  }

  for (const item of news) {
    items.push({
      date: padDate(item.date),
      display: item.date,
      endDate: item.endDate ? padDate(item.endDate) : undefined,
      kind: item.kind,
      title: L(item.title, locale),
      detail: item.detail ? L(item.detail, locale) : undefined,
      href: item.href,
      external: Boolean(item.href),
    });
  }

  items.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return items.slice(0, limit);
}
