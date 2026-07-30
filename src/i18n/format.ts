import type { Locale } from '~/data/types';

const enMonth = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
const enDate = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

/** Format a `YYYY-MM` (or `YYYY-MM-DD`) string. Timezone-safe: never goes through Date parsing. */
export function formatYearMonth(date: string, locale: Locale): string {
  const [yStr, mStr, dStr] = date.split('-');
  const y = Number(yStr);
  const m = Number(mStr ?? '1');
  const d = dStr ? Number(dStr) : undefined;
  if (locale === 'ja') return d ? `${y}年${m}月${d}日` : `${y}年${m}月`;
  if (d) return enDate.format(new Date(y, m - 1, d));
  return enMonth.format(new Date(y, m - 1, 1));
}

function fmtShort(d: string, locale: Locale): string {
  const [yStr, mStr, dStr] = d.split('-');
  const y = Number(yStr);
  const m = Number(mStr);
  const day = dStr ? Number(dStr) : undefined;
  if (locale === 'ja') {
    const yearMonth = `${y}.${String(m).padStart(2, '0')}`;
    return day ? `${yearMonth}.${String(day).padStart(2, '0')}` : yearMonth;
  }
  if (day) return enDate.format(new Date(y, m - 1, day));
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

/** A normalized `<time datetime="">` value for a YYYY-MM or YYYY-MM-DD input. */
export function isoYearMonth(date: string): string {
  const [y, m, d] = date.split('-');
  const yearMonth = `${y}-${(m ?? '01').padStart(2, '0')}`;
  return d ? `${yearMonth}-${d.padStart(2, '0')}` : yearMonth;
}
