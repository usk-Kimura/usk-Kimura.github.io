import type { Locale } from '~/data/types';

const enMonth = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });

/** Format a `YYYY-MM` (or `YYYY-MM-DD`) string. Timezone-safe: never goes through Date parsing. */
export function formatYearMonth(date: string, locale: Locale): string {
  const [yStr, mStr] = date.split('-');
  const y = Number(yStr);
  const m = Number(mStr ?? '1');
  if (locale === 'ja') return `${y}年${m}月`;
  return enMonth.format(new Date(y, m - 1, 1));
}

function fmtShort(d: string, locale: Locale): string {
  const [yStr, mStr] = d.split('-');
  const y = Number(yStr);
  const m = Number(mStr);
  if (locale === 'ja') return `${y}.${String(m).padStart(2, '0')}`;
  return enMonth.format(new Date(y, m - 1, 1));
}

/** Compact `YYYY.MM` (ja) / `MMM YYYY` (en) range for timeline rows.
 *  Returns the start and end parts separately so callers can wrap each in a
 *  `<time>` element with the proper `datetime` attribute. */
export function formatRangeParts(
  start: string,
  end: string | undefined,
  locale: Locale,
  present: string,
): { start: string; end: string } {
  return {
    start: fmtShort(start, locale),
    end: end ? fmtShort(end, locale) : present,
  };
}

/** A `<time datetime="">` value for a YYYY-MM input (good enough for HTML5 month). */
export function isoYearMonth(date: string): string {
  const [y, m] = date.split('-');
  return `${y}-${(m ?? '01').padStart(2, '0')}`;
}
