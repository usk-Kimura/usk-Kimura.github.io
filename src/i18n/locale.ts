import type { Locale, LocalizedString } from '~/data/types';

export const defaultLocale: Locale = 'ja';

/** Display order of the language switcher. */
export const locales: Locale[] = ['ja', 'en', 'zh', 'ko'];

/** Locales served under a URL prefix. The default locale lives at the root, so
 *  it is routed by its own page files and excluded here. */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale);

/** Locales whose text is machine-translated from the Japanese/English source.
 *  Pages in these locales carry a visible translation notice. */
export const machineTranslated: Locale[] = ['zh', 'ko'];

export const isMachineTranslated = (locale: Locale): boolean =>
  machineTranslated.includes(locale);

type LocaleMeta = {
  /** Value for the `lang` attribute and `hreflang`. */
  lang: string;
  /** Endonym, shown in the language switcher. */
  label: string;
  /** Two-to-three character endonym for narrow viewports. */
  short: string;
  /** URL prefix, without a trailing slash. Empty for the default locale. */
  prefix: string;
  /** BCP-47 tag used for `Intl` date formatting. */
  intl: string;
  /** `og:locale` value. */
  ogLocale: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  ja: { lang: 'ja', label: '日本語', short: '日本語', prefix: '', intl: 'ja-JP', ogLocale: 'ja_JP' },
  en: { lang: 'en', label: 'English', short: 'EN', prefix: '/en', intl: 'en-US', ogLocale: 'en_US' },
  zh: { lang: 'zh-Hans', label: '简体中文', short: '中文', prefix: '/zh', intl: 'zh-CN', ogLocale: 'zh_CN' },
  ko: { lang: 'ko', label: '한국어', short: '한국어', prefix: '/ko', intl: 'ko-KR', ogLocale: 'ko_KR' },
};

/**
 * Read a localized string, falling back to English when a translation is
 * missing. Every component should go through this rather than indexing the
 * object directly, so an untranslated entry degrades instead of rendering
 * `undefined`.
 */
export function L(value: LocalizedString, locale: Locale): string {
  return value[locale] ?? value.en;
}

/** Same as `L`, but for objects where even English may be absent. */
export function LO(
  value: Partial<Record<Locale, string>> | undefined,
  locale: Locale,
): string | undefined {
  if (!value) return undefined;
  return value[locale] ?? value.en ?? value.ja;
}

/** Build a locale-prefixed path. `path` must start with `/`. */
export function localizePath(path: string, locale: Locale): string {
  const prefix = localeMeta[locale].prefix;
  return `${prefix}${path}` || '/';
}

/** The same page in every locale — used for `hreflang` and the switcher. */
export function alternatePaths(path: string): Record<Locale, string> {
  return {
    ja: localizePath(path, 'ja'),
    en: localizePath(path, 'en'),
    zh: localizePath(path, 'zh'),
    ko: localizePath(path, 'ko'),
  };
}
