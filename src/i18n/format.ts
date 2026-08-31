import type { Locale } from '~/data/types';
import { localeMeta } from './locale';

/** Split a `YYYY-MM` / `YYYY-MM-DD` string without going through `Date`,
 *  which would reinterpret it in the local timezone. */
function parts(date: string): { y: number; m: number; d?: number } {
  const [yStr, mStr, dStr] = date.split('-');
  return {
    y: Number(yStr),
    m: Number(mStr ?? '1'),
    d: dStr ? Number(dStr) : undefined,
  };
}

const enMonth = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
const enDate = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

/** Human-readable year/month(/day), e.g. `2026年7月` / `Jul 2026` / `2026년 7월`. */
export function formatYearMonth(date: string, locale: Locale): string {
  // A bibliography may only know the publication year. Do not invent January
  // when displaying that lower-granularity source date.
  if (/^\d{4}$/.test(date)) {
    return locale === 'ja' || locale === 'zh'
      ? `${date}年`
      : locale === 'ko'
        ? `${date}년`
        : date;
  }
  const { y, m, d } = parts(date);
  switch (locale) {
    case 'ja':
    case 'zh':
      return d ? `${y}年${m}月${d}日` : `${y}年${m}月`;
    case 'ko':
      return d ? `${y}년 ${m}월 ${d}일` : `${y}년 ${m}월`;
    default:
      return d ? enDate.format(new Date(y, m - 1, d)) : enMonth.format(new Date(y, m - 1, 1));
  }
}

/** Compact form used in date gutters: `2026.07` (CJK) / `Jul 2026` (en). */
function compact(date: string, locale: Locale): string {
  const { y, m, d } = parts(date);
  if (locale === 'en') {
    return d ? enDate.format(new Date(y, m - 1, d)) : enMonth.format(new Date(y, m - 1, 1));
  }
  const ym = `${y}.${String(m).padStart(2, '0')}`;
  return d ? `${ym}.${String(d).padStart(2, '0')}` : ym;
}

/** Start and end of a range, returned separately so each half can be wrapped
 *  in its own `<time datetime="">`. */
export function formatRangeParts(
  start: string,
  end: string | undefined,
  locale: Locale,
  present: string,
): { start: string; end: string } {
  return {
    start: compact(start, locale),
    end: end ? compact(end, locale) : present,
  };
}

/** A normalized `<time datetime="">` value for a `YYYY-MM` / `YYYY-MM-DD` input. */
export function isoYearMonth(date: string): string {
  const [y, m, d] = date.split('-');
  const yearMonth = `${y}-${(m ?? '01').padStart(2, '0')}`;
  return d ? `${yearMonth}-${d.padStart(2, '0')}` : yearMonth;
}

/** Single-day or multi-day event date, e.g. `2026年8月17日 – 18日`. */
export function formatEventRange(start: string, end: string | undefined, locale: Locale): string {
  if (!end || end === start) return formatYearMonth(start, locale);

  const a = parts(start);
  const b = parts(end);

  if (locale === 'en') {
    return enDate.formatRange(
      new Date(a.y, a.m - 1, a.d ?? 1),
      new Date(b.y, b.m - 1, b.d ?? 1),
    );
  }

  const sameMonth = a.y === b.y && a.m === b.m;
  if (locale === 'ko') {
    const tail = sameMonth ? `${b.d}일` : `${b.m}월 ${b.d}일`;
    return `${a.y}년 ${a.m}월 ${a.d}일 – ${tail}`;
  }
  const tail = sameMonth ? `${b.d}日` : `${b.m}月${b.d}日`;
  return `${a.y}年${a.m}月${a.d}日 – ${tail}`;
}

/** Grant amounts. CJK locales use the 万 (10,000) unit the way local funding
 *  bodies report them; English falls back to grouped yen. */
export function formatAmountJpy(amount: number, locale: Locale): string {
  const man = amount / 10_000;
  if (!Number.isInteger(man)) {
    return new Intl.NumberFormat(localeMeta[locale].intl, {
      style: 'currency',
      currency: 'JPY',
      maximumFractionDigits: 0,
    }).format(amount);
  }
  switch (locale) {
    case 'ja':
      return `${man.toLocaleString('ja-JP')}万円`;
    case 'zh':
      return `${man.toLocaleString('zh-CN')}万日元`;
    case 'ko':
      return `${man.toLocaleString('ko-KR')}만 엔`;
    default:
      return `¥${amount.toLocaleString('en-US')}`;
  }
}
