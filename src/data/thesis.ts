import type { LocalizedString } from './types';

/** Bibliographic date and title from the laboratory's thesis record.
 *  This is separate from the March 2026 degree-conferral date. */
export const doctoralThesis = {
  title: 'A Study on Designing Annotation-Free Tasks for Domain Adaptation of Language Models in Text Classification',
  date: '2026-01',
  kind: {
    ja: '博士論文',
    en: 'Doctoral Thesis',
    zh: '博士论文',
    ko: '박사학위 논문',
  } satisfies LocalizedString,
  institution: {
    ja: '同志社大学大学院文化情報学研究科（2025年度）',
    en: 'Graduate School of Culture and Information Science, Doshisha University (academic year 2025)',
    zh: '同志社大学研究生院文化信息学研究科（2025学年度）',
    ko: '도시샤대학교 대학원 문화정보학연구과(2025학년도)',
  } satisfies LocalizedString,
  recordLabel: {
    ja: '論文情報（研究室サイト）',
    en: 'Thesis record (laboratory website)',
    zh: '论文信息（研究室网站）',
    ko: '논문 정보(연구실 웹사이트)',
  } satisfies LocalizedString,
  recordUrl: 'https://www.milcis.doshisha.ac.jp/publications/paper/814/',
};
