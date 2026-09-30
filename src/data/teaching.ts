import type { TeachingEntry } from './types';

/** Course details supplied by the instructor from the official syllabus. */
export const teaching: TeachingEntry[] = [
  {
    term: {
      ja: '2026年度秋学期',
      en: 'Fall 2026',
      zh: '2026年度秋季学期',
      ko: '2026년도 가을학기',
    },
    title: {
      ja: 'データサイエンス・ＡＩ演習－7（自然言語処理の基礎）',
      en: 'Practical Exercises for Data Science and AI–7: Fundamentals of Natural Language Processing',
      zh: '数据科学与人工智能演习－7（自然语言处理基础）',
      ko: '데이터 사이언스·AI 연습－7(자연어 처리의 기초)',
    },
    organization: {
      ja: '同志社大学',
      en: 'Doshisha University',
      zh: '同志社大学',
      ko: '도시샤대학교',
    },
    details: {
      ja: '一般教養科目・1回生以上・2単位｜オンデマンド形式（最終テストは対面）',
      en: 'General education · First-year students and above · 2 credits · On-demand lectures with an in-person final test',
      zh: '通识课程・一年级及以上・2学分｜录播授课（期末考试为线下考试）',
      ko: '교양 과목·1학년 이상·2학점 | 온디맨드 수업(최종 시험은 대면)',
    },
    syllabusUrl: 'https://syllabus.doshisha.ac.jp/html/2026/6008/16008506007.html',
  },
];
