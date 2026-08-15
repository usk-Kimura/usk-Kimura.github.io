import type { Locale } from '~/data/types';
import { zh } from './ui.zh';
import { ko } from './ui.ko';

/**
 * Every user-visible string that is not research data lives here. Components
 * must not hard-code prose — otherwise a locale silently falls back to
 * Japanese, which is exactly the bug this file exists to prevent.
 *
 * `ja` is the source of truth for the shape; `en`, `zh`, and `ko` are typed
 * against it, so a missing key is a build error rather than a blank on the page.
 */
const ja = {
  nav: {
    research: '研究',
    publications: '論文',
    awards: '受賞',
    career: '経歴',
    grants: '研究支援',
    contact: '連絡先',
    cv: '履歴書',
  },
  sections: {
    activity: '最近の活動',
    highlights: '実績ハイライト',
    research: '研究テーマ',
    keywords: 'キーワード',
    fields: '研究分野',
    selectedPublications: '主要論文',
    publications: '論文',
    awards: '受賞',
    career: '経歴',
    education: '学歴',
    grants: '研究費・計算資源',
    services: '学術貢献',
    memberships: '所属学会',
    contact: '連絡先',
  },
  labels: {
    present: '現在',
    affiliation: '所属',
    position: '職位',
    degree: '学位',
    recipients: '受賞者',
    projectNumber: '課題番号',
    amount: '配分額',
    role: '役割',
    venue: '会場',
    abstract: '要旨',
    search: '検索',
    searchPlaceholder: 'タイトル・著者・掲載先',
    filter: '種別',
    all: 'すべて',
    olderPublications: '過去の論文を表示',
    noResults: '該当する論文はありません。',
    copyEmail: 'コピー',
    copied: 'コピーしました',
    backToTop: 'ページ上部へ',
    skipToContent: 'メインコンテンツへ',
    newTab: '（新しいタブで開きます）',
    external: '外部リンク',
    chooseLanguage: '言語',
    toggleTheme: '配色を切り替える',
    researchmapUpdated: 'researchmap 最終更新',
    researchProfiles: '研究者プロフィール',
    social: 'SNS',
    email: 'メール',
    print: '印刷 / PDF 保存',
    breadcrumb: 'パンくずリスト',
    upcoming: '予定',
    inProgress: '開催中',
    tomorrow: '明日',
    daysLeft: 'あと{n}日',
    eventPage: '開催案内',
    openPosition: '公募情報',
    mainNav: 'サイトナビゲーション',
    contents: 'ページ内目次',
    footerNav: 'フッターナビゲーション',
  },
  /** `<meta name="description">` per page. `{name}` is substituted. */
  meta: {
    publications: '{name} の論文一覧。タイトル・著者・掲載先・種別で検索できます。',
    cv: '{name} の履歴書。学歴・経歴・受賞・論文・研究費の一覧。',
  },
  counts: {
    publications: '全 {n} 件',
    matching: '{n} / {m} 件が一致',
    awards: '全 {n} 件',
    older: '{n} 件',
  },
  highlights: {
    peerReviewed: '査読付き論文',
    firstAuthor: '筆頭著者業績',
    principalInvestigator: '研究代表課題',
    awards: '受賞実績',
  },
  actions: {
    seeAllPublications: '論文をすべて見る',
    viewCv: '履歴書 (CV) を見る',
    contactMe: '連絡する',
    backToPublications: '論文一覧へ戻る',
    backHome: 'トップへ戻る',
  },
  pubTypes: {
    journal: 'ジャーナル',
    'international-conference': '国際会議',
    'domestic-conference': '国内研究会',
  },
  flags: {
    'peer-reviewed': '査読あり',
    'first-author': '筆頭著者',
    'corresponding-author': '責任著者',
    invited: '招待',
  },
  newsKinds: {
    paper: '論文',
    award: '受賞',
    grant: '研究費',
    hpc: '計算資源',
    fellowship: 'フェローシップ',
    presentation: '発表',
    talk: '講演',
    media: 'メディア',
    position: '着任',
    misc: 'お知らせ',
  },
  grantCategories: {
    funding: '研究費',
    hpc: '計算資源',
    fellowship: 'フェローシップ',
  },
  opportunities: {
    heading: '次のポストを探しています',
  },
  translation: {
    /** Shown at the top of machine-translated pages. */
    notice:
      'このページは AI による自動翻訳です。表現や専門用語に誤りが含まれる場合があります。',
    /** Where to go for the authoritative text. */
    noticeLink: '正確な内容は日本語版または英語版をご覧ください。',
    footerNote: 'AI 自動翻訳ページ',
  },
  cv: {
    title: '履歴書 (Curriculum Vitae)',
    researcherNumber: '研究者番号',
    researchmapMemberId: 'researchmap 会員ID',
  },
  notFound: {
    title: 'ページが見つかりません',
    body: 'お探しのページは移動または削除された可能性があります。',
  },
  footer: {
    built: 'Astro と Tailwind CSS で構築',
  },
};

/** Shape every locale bundle must satisfy. Derived from `ja`, so adding a key
 *  there immediately turns every other locale into a type error. */
export type UiStrings = typeof ja;

const en: UiStrings = {
  nav: {
    research: 'Research',
    publications: 'Publications',
    awards: 'Awards',
    career: 'Career',
    grants: 'Funding',
    contact: 'Contact',
    cv: 'CV',
  },
  sections: {
    activity: 'Recent activity',
    highlights: 'Highlights',
    research: 'Research',
    keywords: 'Keywords',
    fields: 'Fields',
    selectedPublications: 'Selected publications',
    publications: 'Publications',
    awards: 'Awards',
    career: 'Career',
    education: 'Education',
    grants: 'Funding & compute',
    services: 'Academic service',
    memberships: 'Memberships',
    contact: 'Contact',
  },
  labels: {
    present: 'Present',
    affiliation: 'Affiliation',
    position: 'Position',
    degree: 'Degree',
    recipients: 'Recipients',
    projectNumber: 'Project no.',
    amount: 'Award',
    role: 'Role',
    venue: 'Venue',
    abstract: 'Abstract',
    search: 'Search',
    searchPlaceholder: 'Title, author, or venue',
    filter: 'Type',
    all: 'All',
    olderPublications: 'Show earlier publications',
    noResults: 'No publications match.',
    copyEmail: 'Copy',
    copied: 'Copied',
    backToTop: 'Back to top',
    skipToContent: 'Skip to main content',
    newTab: '(opens in a new tab)',
    external: 'Link',
    chooseLanguage: 'Language',
    toggleTheme: 'Toggle colour theme',
    researchmapUpdated: 'researchmap updated',
    researchProfiles: 'Profiles',
    social: 'Social',
    email: 'Email',
    print: 'Print / Save as PDF',
    breadcrumb: 'Breadcrumb',
    upcoming: 'Upcoming',
    inProgress: 'In progress',
    tomorrow: 'Tomorrow',
    daysLeft: 'In {n} days',
    eventPage: 'Event page',
    openPosition: 'Position',
    mainNav: 'Site navigation',
    contents: 'On this page',
    footerNav: 'Footer navigation',
  },
  meta: {
    publications: 'Publications by {name}, searchable by title, author, venue, and type.',
    cv: 'Curriculum vitae of {name}: education, career, awards, publications, and funding.',
  },
  counts: {
    publications: '{n} total',
    matching: '{n} of {m} match',
    awards: '{n} total',
    older: '{n}',
  },
  highlights: {
    peerReviewed: 'Peer-reviewed papers',
    firstAuthor: 'First-author works',
    principalInvestigator: 'Projects as PI',
    awards: 'Awards',
  },
  actions: {
    seeAllPublications: 'See all publications',
    viewCv: 'View CV',
    contactMe: 'Get in touch',
    backToPublications: 'Back to publications',
    backHome: 'Back to home',
  },
  pubTypes: {
    journal: 'Journal',
    'international-conference': 'International conference',
    'domestic-conference': 'Domestic meeting',
  },
  flags: {
    'peer-reviewed': 'Peer-reviewed',
    'first-author': 'First author',
    'corresponding-author': 'Corresponding author',
    invited: 'Invited',
  },
  newsKinds: {
    paper: 'Paper',
    award: 'Award',
    grant: 'Grant',
    hpc: 'Compute',
    fellowship: 'Fellowship',
    presentation: 'Presentation',
    talk: 'Talk',
    media: 'Media',
    position: 'Position',
    misc: 'Update',
  },
  grantCategories: {
    funding: 'Grant',
    hpc: 'Compute',
    fellowship: 'Fellowship',
  },
  opportunities: {
    heading: 'Looking for my next position',
  },
  translation: {
    notice: 'This page was machine-translated by AI and may contain wording or terminology errors.',
    noticeLink: 'See the Japanese or English version for the authoritative text.',
    footerNote: 'AI-translated page',
  },
  cv: {
    title: 'Curriculum Vitae',
    researcherNumber: 'Researcher number',
    researchmapMemberId: 'researchmap member ID',
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for may have been moved or removed.',
  },
  footer: {
    built: 'Built with Astro and Tailwind CSS',
  },
};

const bundles: Record<Locale, UiStrings> = { ja, en, zh, ko };

export const t = (locale: Locale): UiStrings => bundles[locale];

/** Fill `{name}` placeholders in a UI string. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) =>
    key in vars ? String(vars[key]) : whole,
  );
}
