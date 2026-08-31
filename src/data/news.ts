import type { LocalizedString } from './types';

export type NewsKind =
  | 'paper'
  | 'award'
  | 'coauthor-award'
  | 'grant'
  | 'hpc'
  | 'fellowship'
  | 'presentation'
  | 'talk'
  | 'media'
  | 'position'
  | 'misc';

export type NewsItem = {
  /** YYYY-MM or YYYY-MM-DD. Used for sorting; finer dates win ties. */
  date: string;
  /** Optional final day for a multi-day event. */
  endDate?: string;
  kind: NewsKind;
  title: LocalizedString;
  /** Optional one-line detail rendered under the title. */
  detail?: LocalizedString;
  /** Structured event details used by the upcoming-presentation display. */
  event?: {
    label: LocalizedString;
    name: LocalizedString;
    venue: LocalizedString;
  };
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
export const news: NewsItem[] = [
  {
    date: '2026-07-31',
    kind: 'grant',
    title: {
      ja: '科研費「研究活動スタート支援」に採択されました',
      en: 'Awarded a JSPS KAKENHI Grant-in-Aid for Research Activity Start-up',
      zh: '获批日本学术振兴会 科学研究费补助事业（KAKENHI）“研究活动启动支援”项目',
      ko: '일본학술진흥회 과학연구비조성사업(KAKENHI) “연구활동 스타트업 지원”에 선정되었습니다',
    },
    detail: {
      ja: '課題番号 26K25590「未十分学習ドメインへの言語モデル軽量適応に向けた学習時更新資源配分制御の研究」（研究代表者・2026–2027年度）',
      en: 'Project 26K25590, "Controlling the Allocation of Update Resources during Training for Lightweight Language-Model Adaptation to Under-Trained Domains" (Principal Investigator, FY2026–2027)',
      zh: '课题编号 26K25590《面向训练不足领域语言模型轻量化适应的训练时更新资源分配控制研究》（研究负责人，2026–2027年度）',
      ko: '과제번호 26K25590 “학습이 충분하지 않은 도메인에 대한 언어 모델 경량 적응을 위한 학습 시 갱신 자원 배분 제어 연구” (연구대표자, 2026–2027년도)',
    },
    href: 'https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-26K25590/',
  },
  {
    date: '2026-09-14',
    endDate: '2026-09-16',
    kind: 'presentation',
    title: {
      ja: '「ByteTop-k OPD：バイト列表現に基づく語彙の異なる LLM 間のオンポリシ蒸留」を発表予定',
      en: 'Presenting “ByteTop-k OPD: On-Policy Distillation between LLMs with Different Vocabularies Based on Byte-String Representations”',
      zh: '即将报告《ByteTop-k OPD：基于字节串表示的不同词表 LLM 之间的同策略蒸馏》',
      ko: '“ByteTop-k OPD: 바이트열 표현에 기반한 어휘가 다른 LLM 간 온폴리시 증류”를 발표할 예정입니다',
    },
    detail: {
      ja: '情報処理学会 第269回自然言語処理研究発表会｜帯広＋オンライン',
      en: 'IPSJ SIG-NL 269th Meeting · Obihiro + online',
      zh: '信息处理学会 第269次自然语言处理研究会｜带广＋线上',
      ko: '정보처리학회 제269회 자연어 처리 연구발표회 | 오비히로 + 온라인',
    },
    event: {
      label: { ja: 'NL研 269', en: 'SIG-NL 269', zh: 'SIG-NL 269', ko: 'SIG-NL 269' },
      name: {
        ja: '情報処理学会 第269回自然言語処理研究発表会',
        en: 'IPSJ SIG-NL 269th Meeting',
        zh: '信息处理学会（IPSJ）第269次自然语言处理研究会',
        ko: '정보처리학회(IPSJ) 제269회 자연어 처리 연구발표회',
      },
      venue: { ja: '帯広＋オンライン', en: 'Obihiro + online', zh: '带广＋线上', ko: '오비히로 + 온라인' },
    },
    href: 'https://www.ipsj.or.jp/kenkyukai/event/nl269.html',
  },
  {
    date: '2026-08-17',
    endDate: '2026-08-18',
    // Tagged as an award, not a presentation: this entry stands in for the
    // awards.ts record, which `recent.ts` dedups out of the feed because both
    // link to the poster.
    kind: 'award',
    title: {
      ja: '「異なる語彙を持つLLM間のOn-Policy Distillation」を発表し、スポンサー賞（株式会社ELYZA）を受賞しました',
      en: 'Presented “On-Policy Distillation between LLMs with Different Vocabularies” and received the Sponsor Award (ELYZA, Inc.)',
      zh: '报告了《具有不同词表的 LLM 之间的 On-Policy Distillation》，并荣获赞助商奖（ELYZA 股份有限公司）',
      ko: '“서로 다른 어휘를 가진 LLM 간의 On-Policy Distillation”을 발표하고 스폰서상(주식회사 ELYZA)을 수상했습니다',
    },
    detail: {
      ja: '第21回言語処理若手シンポジウム（YANS2026）｜仙台国際センター｜リンク先は発表ポスター（PDF）',
      en: 'The 21st YANS Symposium (YANS 2026) · Sendai International Center · Link opens the poster (PDF)',
      zh: '第21届语言处理青年研究者研讨会（YANS2026）｜仙台国际中心｜链接为海报（PDF）',
      ko: '제21회 언어 처리 젊은 연구자 심포지엄(YANS2026) | 센다이 국제센터 | 링크는 발표 포스터(PDF)',
    },
    event: {
      label: { ja: 'YANS 2026', en: 'YANS 2026', zh: 'YANS 2026', ko: 'YANS 2026' },
      name: {
        ja: '第21回言語処理若手シンポジウム',
        en: 'The 21st YANS Symposium',
        zh: '第21届语言处理青年研究者研讨会',
        ko: '제21회 언어 처리 젊은 연구자 심포지엄',
      },
      venue: { ja: '仙台国際センター', en: 'Sendai International Center', zh: '仙台国际中心', ko: '센다이 국제센터' },
    },
    href: '/yans2026-poster.pdf',
  },
];
