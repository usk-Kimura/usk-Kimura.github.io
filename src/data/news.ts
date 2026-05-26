import type { LocalizedString } from './types';

export type NewsKind =
  | 'paper'
  | 'award'
  | 'grant'
  | 'hpc'
  | 'fellowship'
  | 'talk'
  | 'media'
  | 'position'
  | 'misc';

export type NewsItem = {
  /** YYYY-MM or YYYY-MM-DD. Used for sorting; finer dates win ties. */
  date: string;
  kind: NewsKind;
  title: LocalizedString;
  /** Optional one-line detail rendered under the title. */
  detail?: LocalizedString;
  /** Optional URL the title links to. */
  href?: string;
};

/**
 * Manually-curated activity items. The "Recent" block on the home page
 * aggregates this with publications/awards/grants and shows the most recent
 * few entries.
 *
 * Examples (uncomment and edit as needed):
 *
 * {
 *   date: '2026-04-01',
 *   kind: 'position',
 *   title: {
 *     ja: '名古屋大学 大学院情報学研究科に着任しました',
 *     en: 'Joined the Graduate School of Informatics, Nagoya University',
 *   },
 * },
 * {
 *   date: '2026-03-20',
 *   kind: 'talk',
 *   title: {
 *     ja: '○○大学にて招待講演を行いました',
 *     en: 'Gave an invited talk at ○○ University',
 *   },
 *   detail: {
 *     ja: '「LLM の事後学習における...」',
 *     en: 'Topic: "Post-training of LLMs..."',
 *   },
 * },
 * {
 *   date: '2026-02-05',
 *   kind: 'media',
 *   title: {
 *     ja: '日経新聞に掲載されました',
 *     en: 'Featured in Nikkei Shimbun',
 *   },
 *   href: 'https://example.com/article',
 * },
 */
export const news: NewsItem[] = [];
