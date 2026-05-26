import type { CareerEntry, EducationEntry } from './types';

export const career: CareerEntry[] = [
  {
    start: '2026-04',
    organization: {
      ja: '名古屋大学 大学院情報学研究科 知能システム学専攻',
      en: 'Graduate School of Informatics, Nagoya University',
    },
    role: {
      ja: '科学技術振興機構 戦略的創造研究推進事業 研究員',
      en: 'Researcher, JST Strategic Basic Research Programs',
    },
  },
  {
    start: '2019-04',
    end: '2026-03',
    organization: {
      ja: '同志社大学 大学院文化情報学研究科',
      en: 'Graduate School of Culture and Information Science, Doshisha University',
    },
    role: {
      ja: 'TA（データベースシステム、プログラミング入門・基礎・応用 等）',
      en: 'Teaching Assistant (Database Systems, Programming I–III)',
    },
  },
  {
    start: '2023-04',
    end: '2024-03',
    organization: { ja: '同志社大学大学院', en: 'Doshisha University Graduate School' },
    role: {
      ja: '博士後期課程 次世代研究者挑戦的研究プロジェクト (SPRING) 支援対象学生',
      en: 'JST SPRING Fellow (Doctoral Program)',
    },
  },
  {
    start: '2023-02',
    end: '2023-03',
    organization: {
      ja: 'NTT コミュニケーション科学基礎研究所',
      en: 'NTT Communication Science Laboratories',
    },
    role: { ja: 'インターンシップ', en: 'Research Internship' },
  },
  {
    start: '2022-04',
    end: '2023-03',
    organization: { ja: '同志社大学大学院', en: 'Doshisha University Graduate School' },
    role: {
      ja: '博士後期課程 若手研究者育成フェローシップ',
      en: 'Doctoral Fellowship for Young Researchers',
    },
  },
  {
    start: '2021-03',
    end: '2023-03',
    organization: {
      ja: '同志社大学 文化情報学部',
      en: 'Faculty of Culture and Information Science, Doshisha University',
    },
    role: { ja: '特定業務職員', en: 'Specialized Staff' },
  },
];

export const education: EducationEntry[] = [
  {
    start: '2021-04',
    end: '2026-03',
    school: { ja: '同志社大学 大学院文化情報学研究科', en: 'Doshisha University Graduate School' },
    program: {
      ja: '文化情報学専攻 博士課程（後期課程）',
      en: 'Ph.D. Program, Culture and Information Science',
    },
  },
  {
    start: '2019-04',
    end: '2021-03',
    school: { ja: '同志社大学 大学院文化情報学研究科', en: 'Doshisha University Graduate School' },
    program: {
      ja: '文化情報学専攻 博士課程（前期課程）',
      en: 'M.S. Program, Culture and Information Science',
    },
  },
  {
    start: '2015-04',
    end: '2019-03',
    school: { ja: '同志社大学 文化情報学部', en: 'Doshisha University' },
    program: { ja: '文化情報学科', en: 'B.A., Culture and Information Science' },
  },
  {
    start: '2012-04',
    end: '2015-03',
    school: { ja: '兵庫県立宝塚北高等学校', en: 'Hyogo Prefectural Takarazuka-Kita High School' },
    program: { ja: '普通科', en: 'General Course' },
  },
];
