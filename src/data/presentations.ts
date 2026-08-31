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
];
