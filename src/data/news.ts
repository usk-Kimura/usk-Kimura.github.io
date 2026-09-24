import type { LocalizedString } from './types';

export type NewsKind =
  | 'paper'
  | 'award'
  | 'coauthor-award'
  | 'grant'
  | 'hpc'
  | 'fellowship'
  | 'participation'
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
 * Manually-curated activity items. The activity timeline aggregates this with
 * publications, awards, and research support. Each localized `title` here must
 * be a complete sentence that says what happened; generated records receive
 * their localized verb phrase in `recent.ts` instead.
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
    date: '2026-09-22',
    endDate: '2026-09-23',
    kind: 'participation',
    title: {
      ja: '東海関西データベースワークショップ 2026（DBWS 2026）に教員として聴講参加しました．',
      en: 'I attended the Tokai–Kansai Database Workshop 2026 (DBWS 2026) as a faculty member, listening to the presentations.',
      zh: '以教师身份旁听参加了东海关西数据库研讨会 2026（DBWS 2026）。',
      ko: '도카이·간사이 데이터베이스 워크숍 2026(DBWS 2026)에 교원으로서 청강 참가했습니다.',
    },
    detail: {
      ja: '東海・関西地域のデータ工学分野の大学研究室が集まり，ポスター発表と研究交流を行う合同ワークショップ｜静岡大学 浜松キャンパス',
      en: 'A joint workshop where university laboratories in data engineering from the Tokai and Kansai regions gather for poster presentations and research exchange · Shizuoka University, Hamamatsu Campus',
      zh: '东海与关西地区数据工程领域的大学研究室开展海报报告与研究交流的联合研讨会｜静冈大学滨松校区',
      ko: '도카이·간사이 지역 데이터 공학 분야 대학 연구실이 모여 포스터 발표와 연구 교류를 진행하는 합동 워크숍 | 시즈오카대학교 하마마쓰 캠퍼스',
    },
    href: 'https://dbws2026.github.io/',
  },
  {
    date: '2026-09-08',
    kind: 'media',
    title: {
      ja: 'YANS 2026 の公式開催報告が公開され，株式会社ELYZA賞の受賞理由が掲載されました．',
      en: 'The official YANS 2026 report has been published, including the selection rationale for my ELYZA Award.',
      zh: 'YANS 2026 官方活动报告已发布，其中刊载了我获得 ELYZA 股份有限公司奖的评选理由。',
      ko: 'YANS 2026 공식 개최 보고가 공개되었으며, 저의 주식회사 ELYZA상 수상 이유가 게재되었습니다.',
    },
    detail: {
      ja: '「異なる語彙を持つ LLM 間のオンポリシ蒸留」｜語彙の違いを直接扱う提案手法と，実用性・今後の発展性が評価されました．',
      en: '“On-Policy Distillation between LLMs with Different Vocabularies” · Recognized for directly addressing vocabulary differences, practical potential, and prospects for further development.',
      zh: '《不同词表 LLM 间的同策略蒸馏》｜直接处理词表差异的方法及其实用潜力与未来发展前景获得认可。',
      ko: '“서로 다른 어휘를 가진 LLM 간 온폴리시 증류” | 어휘 차이를 직접 다루는 제안 방법과 실용성, 향후 발전 가능성을 인정받았습니다.',
    },
    href: 'https://yans.anlp.jp/entry/yans2026report#株式会社ELYZA賞',
  },
  {
    date: '2026-09-17',
    kind: 'misc',
    title: {
      ja: '国際会議 SoICT 2026・iiWAS 2026 のプログラム委員を務めます．',
      en: 'I am serving on the programme committees of SoICT 2026 and iiWAS 2026.',
      zh: '担任国际会议 SoICT 2026 与 iiWAS 2026 的程序委员会委员。',
      ko: '국제회의 SoICT 2026과 iiWAS 2026의 프로그램 위원을 맡습니다.',
    },
    detail: {
      ja: 'いずれも 2026 年 12 月開催の国際会議',
      en: 'Both conferences take place in December 2026.',
      zh: '两场国际会议均于 2026 年 12 月举办。',
      ko: '두 국제회의 모두 2026년 12월에 개최됩니다.',
    },
  },
  {
    date: '2026-07-31',
    kind: 'grant',
    title: {
      ja: '科研費「研究活動スタート支援」に採択されました．',
      en: 'I received a JSPS KAKENHI Grant-in-Aid for Research Activity Start-up.',
      zh: '获批日本学术振兴会 科学研究费补助事业（KAKENHI）“研究活动启动支援”项目。',
      ko: '일본학술진흥회 과학연구비조성사업(KAKENHI) “연구활동 스타트업 지원”에 선정되었습니다.',
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
    date: '2026-08-17',
    endDate: '2026-08-18',
    // Tagged as an award, not a presentation: this entry stands in for the
    // awards.ts record, which `recent.ts` dedups out of the feed because both
    // link to the official report and award rationale.
    kind: 'award',
    title: {
      ja: '「異なる語彙を持つ LLM 間のオンポリシ蒸留」をポスター発表し，株式会社ELYZA賞を受賞しました．',
      en: 'I presented the poster “On-Policy Distillation between LLMs with Different Vocabularies” and received the ELYZA Award.',
      zh: '以海报形式报告了《不同词表 LLM 间的同策略蒸馏》，并荣获 ELYZA 股份有限公司奖。',
      ko: '“서로 다른 어휘를 가진 LLM 간 온폴리시 증류”를 포스터로 발표하고 주식회사 ELYZA상을 수상했습니다.',
    },
    detail: {
      ja: '第21回言語処理若手シンポジウム（YANS 2026）｜仙台国際センター｜リンク先は受賞理由を掲載した公式開催報告',
      en: 'The 21st YANS Symposium (YANS 2026) · Sendai International Center · Link opens the official report with the award rationale',
      zh: '第21届语言处理青年研究者研讨会（YANS 2026）｜仙台国际中心｜链接为载有获奖理由的官方活动报告',
      ko: '제21회 언어 처리 젊은 연구자 심포지엄(YANS 2026) | 센다이 국제센터 | 링크는 수상 이유가 게재된 공식 개최 보고',
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
    href: 'https://yans.anlp.jp/entry/yans2026report#株式会社ELYZA賞',
  },
  {
    date: '2025-09-11',
    endDate: '2025-09-12',
    kind: 'presentation',
    title: {
      ja: '東海関西データベースワークショップ 2025（DBWS 2025）に学生として参加し，「アダプタを効果的に学習する量子化スケジューラに関する研究」をポスター発表しました．',
      en: 'I participated in the Tokai–Kansai Database Workshop 2025 (DBWS 2025) as a student and presented the poster “A Study on a Quantization Scheduler for Effective Adapter Training”.',
      zh: '以学生身份参加了东海关西数据库研讨会2025（DBWS 2025），并以海报形式报告了《有效训练适配器的量化调度器研究》。',
      ko: '도카이·간사이 데이터베이스 워크숍 2025(DBWS 2025)에 학생으로 참가하여 “어댑터를 효과적으로 학습하는 양자화 스케줄러에 관한 연구”를 포스터로 발표했습니다.',
    },
    detail: {
      ja: '関西・東海地域の複数大学・研究室による合同ワークショップ｜同志社大学 今出川キャンパス',
      en: 'Joint workshop involving multiple universities and laboratories in the Kansai and Tokai regions · Doshisha University, Imadegawa Campus',
      zh: '关西与东海地区多所大学及研究室联合研讨会｜同志社大学今出川校区',
      ko: '간사이·도카이 지역 여러 대학 및 연구실의 합동 워크숍 | 도시샤대학교 이마데가와 캠퍼스',
    },
    href: 'https://www.milcis.doshisha.ac.jp/portfolio/dbws-2025/',
  },
  {
    // Presentation title and student status: MIL official report linked below.
    date: '2022-09-20',
    endDate: '2022-09-21',
    kind: 'presentation',
    title: {
      ja: '東海関西データベースワークショップ 2022（DBWS 2022）に学生として参加し，「自己教師あり学習を用いた文書分類のためのマルチタスク学習フレームワーク」をポスター発表しました．',
      en: 'I attended the Tokai–Kansai Database Workshop 2022 (DBWS 2022) as a student and presented the poster “A Multi-task Learning Framework for Document Classification Using Self-supervised Learning”.',
      zh: '以学生身份参加了东海关西数据库研讨会 2022（DBWS 2022），并作海报报告。',
      ko: '도카이·간사이 데이터베이스 워크숍 2022(DBWS 2022)에 학생으로 참가하여 포스터 발표를 했습니다.',
    },
    detail: {
      ja: '東海・関西地域の大学研究室による合同ワークショップ｜甲南大学 平生記念セミナーハウス',
      en: 'Joint workshop of university laboratories in the Tokai and Kansai regions · Konan University, Hirao Memorial Seminar House',
      zh: '报告题目（日文）：自己教師あり学習を用いた文書分類のためのマルチタスク学習フレームワーク｜东海与关西地区大学研究室的联合研讨会｜甲南大学平生纪念研讨中心',
      ko: '발표 제목(일본어): 自己教師あり学習を用いた文書分類のためのマルチタスク学習フレームワーク | 도카이·간사이 지역 대학 연구실의 합동 워크숍 | 고난대학교 히라오 기념 세미나 하우스',
    },
    href: 'https://www.milcis.doshisha.ac.jp/portfolio/dbws2022/',
  },
  {
    date: '2021-09-05',
    endDate: '2021-09-06',
    kind: 'presentation',
    title: {
      ja: '東海関西データベースワークショップ 2021（DBWS 2021）に学生として参加し，「高精度情報検索実現のためのトークナイザの提案」をポスター発表しました．',
      en: 'I attended the Tokai–Kansai Database Workshop 2021 (DBWS 2021) as a student and presented the poster “A Tokenizer for High-accuracy Information Retrieval”.',
      zh: '以学生身份参加了东海关西数据库研讨会 2021（DBWS 2021），并作海报报告。',
      ko: '도카이·간사이 데이터베이스 워크숍 2021(DBWS 2021)에 학생으로 참가하여 포스터 발표를 했습니다.',
    },
    detail: {
      ja: '東海・関西地域の大学研究室による合同ワークショップ｜オンライン開催',
      en: 'Joint workshop of university laboratories in the Tokai and Kansai regions · Online',
      zh: '报告题目（日文）：高精度情報検索実現のためのトークナイザの提案｜东海与关西地区大学研究室的联合研讨会｜线上举办',
      ko: '발표 제목(일본어): 高精度情報検索実現のためのトークナイザの提案 | 도카이·간사이 지역 대학 연구실의 합동 워크숍 | 온라인 개최',
    },
    href: 'https://www.milcis.doshisha.ac.jp/portfolio/dbws2021/',
  },
  {
    date: '2019-09-15',
    endDate: '2019-09-16',
    kind: 'presentation',
    title: {
      ja: '東海関西データベースワークショップ 2019（DBWS 2019）に学生として参加し，「係り受け/照応関係を用いた専門用語自動抽出手法の提案」をポスター発表しました．',
      en: 'I attended the Tokai–Kansai Database Workshop 2019 (DBWS 2019) as a student and presented the poster “Automatic Term Extraction Using Dependency and Anaphoric Relations”.',
      zh: '以学生身份参加了东海关西数据库研讨会 2019（DBWS 2019），并作海报报告。',
      ko: '도카이·간사이 데이터베이스 워크숍 2019(DBWS 2019)에 학생으로 참가하여 포스터 발표를 했습니다.',
    },
    detail: {
      ja: '東海・関西地域の大学研究室による合同ワークショップ｜兵庫県立大学 神戸情報科学キャンパス',
      en: 'Joint workshop of university laboratories in the Tokai and Kansai regions · University of Hyogo, Kobe Campus for Information Science',
      zh: '报告题目（日文）：係り受け/照応関係を用いた専門用語自動抽出手法の提案｜东海与关西地区大学研究室的联合研讨会｜兵库县立大学神户信息科学校区',
      ko: '발표 제목(일본어): 係り受け/照応関係を用いた専門用語自動抽出手法の提案 | 도카이·간사이 지역 대학 연구실의 합동 워크숍 | 효고현립대학교 고베 정보과학 캠퍼스',
    },
    href: 'https://yu-suzuki.github.io/dbws2019/program/',
  },
];
