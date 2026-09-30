import type { Presentation } from './types';

/**
 * Presentations that do not have an archival paper or proceedings entry.
 * Keeping these outside publications prevents them from being counted as
 * papers or exposed as ScholarlyArticle detail pages.
 */
export const presentations: Presentation[] = [
  {
    id: 'yans-2026-on-policy-distillation',
    date: '2026-08-17',
    kind: 'poster',
    title: '異なる語彙を持つ LLM 間のオンポリシ蒸留',
    titleLang: 'ja',
    authors: '木村 優介, 駒水 孝裕, 波多野 賢治, 石川 佳治',
    event: {
      ja: '第21回言語処理若手シンポジウム（YANS 2026）',
      en: '21st Symposium for Young Researchers on Natural Language Processing (YANS 2026)',
      zh: '第21届青年自然语言处理研究者研讨会（YANS 2026）',
      ko: '제21회 언어 처리 젊은 연구자 심포지엄(YANS 2026)',
    },
    venue: {
      ja: '仙台国際センター',
      en: 'Sendai International Center',
      zh: '仙台国际中心',
      ko: '센다이 국제센터',
    },
    posterUrl: '/yans2026-poster.pdf',
    programUrl:
      'https://yans.anlp.jp/entry/yans2026program#1145-1245-%E3%83%9D%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-1',
  },
  // DBWS sources list presenters, rather than complete coauthor lists.
  {
    id: 'dbws-2025-quantization-scheduler',
    date: '2025-09',
    kind: 'poster',
    title: 'アダプタを効果的に学習する量子化スケジューラに関する研究',
    titleLang: 'ja',
    presenter: '木村 優介',
    event: {
      ja: '東海関西データベースワークショップ 2025（DBWS 2025）',
      en: 'Tokai–Kansai Database Workshop 2025 (DBWS 2025)',
      zh: '东海关西数据库研讨会 2025（DBWS 2025）',
      ko: '도카이·간사이 데이터베이스 워크숍 2025(DBWS 2025)',
    },
    venue: {
      ja: '同志社大学 今出川キャンパス',
      en: 'Doshisha University, Imadegawa Campus',
      zh: '同志社大学今出川校区',
      ko: '도시샤대학교 이마데가와 캠퍼스',
    },
    recordUrl: 'https://www.milcis.doshisha.ac.jp/portfolio/dbws-2025/',
  },
  {
    id: 'dbws-2022-self-supervised-multitask',
    date: '2022-09',
    kind: 'poster',
    title: '自己教師あり学習を用いた文書分類のためのマルチタスク学習フレームワーク',
    titleLang: 'ja',
    presenter: '木村 優介',
    event: {
      ja: '東海関西データベースワークショップ 2022（DBWS 2022）',
      en: 'Tokai–Kansai Database Workshop 2022 (DBWS 2022)',
      zh: '东海关西数据库研讨会 2022（DBWS 2022）',
      ko: '도카이·간사이 데이터베이스 워크숍 2022(DBWS 2022)',
    },
    venue: {
      ja: '甲南大学 平生記念セミナーハウス',
      en: 'Konan University, Hirao Memorial Seminar House',
      zh: '甲南大学平生纪念研讨中心',
      ko: '고난대학교 히라오 기념 세미나 하우스',
    },
    recordUrl: 'https://www.milcis.doshisha.ac.jp/portfolio/dbws2022/',
  },
  {
    id: 'dbws-2021-information-retrieval-tokenizer',
    date: '2021-09',
    kind: 'poster',
    title: '高精度情報検索実現のためのトークナイザの提案',
    titleLang: 'ja',
    presenter: '木村 優介',
    event: {
      ja: '東海関西データベースワークショップ 2021（DBWS 2021）',
      en: 'Tokai–Kansai Database Workshop 2021 (DBWS 2021)',
      zh: '东海关西数据库研讨会 2021（DBWS 2021）',
      ko: '도카이·간사이 데이터베이스 워크숍 2021(DBWS 2021)',
    },
    venue: {
      ja: 'オンライン開催',
      en: 'Online',
      zh: '线上举办',
      ko: '온라인 개최',
    },
    recordUrl: 'https://www.milcis.doshisha.ac.jp/portfolio/dbws2021/',
  },
  {
    id: 'dbws-2019-term-extraction',
    date: '2019-09',
    kind: 'poster',
    title: '係り受け/照応関係を用いた専門用語自動抽出手法の提案',
    titleLang: 'ja',
    presenter: '木村 優介',
    event: {
      ja: '東海関西データベースワークショップ 2019（DBWS 2019）',
      en: 'Tokai–Kansai Database Workshop 2019 (DBWS 2019)',
      zh: '东海关西数据库研讨会 2019（DBWS 2019）',
      ko: '도카이·간사이 데이터베이스 워크숍 2019(DBWS 2019)',
    },
    venue: {
      ja: '兵庫県立大学 神戸情報科学キャンパス',
      en: 'University of Hyogo, Kobe Campus for Information Science',
      zh: '兵库县立大学神户信息科学校区',
      ko: '효고현립대학교 고베 정보과학 캠퍼스',
    },
    programUrl: 'https://yu-suzuki.github.io/dbws2019/program/',
  },
];
