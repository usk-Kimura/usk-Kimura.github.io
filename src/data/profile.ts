import type { Profile } from './types';

export const profile: Profile = {
  name: { ja: '木村 優介', en: 'Yusuke Kimura' },
  reading: { ja: 'キムラ ユウスケ', en: 'Kimura Yusuke' },
  affiliation: {
    ja: '名古屋大学 大学院情報学研究科 知能システム学専攻',
    en: 'Graduate School of Informatics, Department of Intelligent Systems, Nagoya University',
  },
  position: {
    ja: '科学技術振興機構 戦略的創造研究推進事業 研究員',
    en: 'Researcher, JST Strategic Basic Research Programs',
  },
  degree: {
    ja: '博士（文化情報学）',
    en: 'Ph.D. in Culture and Information Science',
  },
  tagline: {
    ja: '自然言語処理 / マルチタスク学習 / 大規模言語モデル',
    en: 'NLP · Multi-task Learning · Large Language Models',
  },
  bio: {
    ja: '自然言語処理を専門とし、特にマルチタスク学習・文書分類・キーフレーズ抽出に取り組んでいます。近年は大規模言語モデルの効率的なアダプタ学習や、社会的バイアスの緩和に関する研究を行っています。',
    en: 'I work on natural language processing, with a focus on multi-task learning, text classification, and keyphrase extraction. My recent work explores efficient adapter learning for large language models and social bias mitigation.',
  },
  emails: [
    {
      address: 'kimura.yusuke.p2@f.mail.nagoya-u.ac.jp',
      label: { ja: '名古屋大学', en: 'Nagoya University' },
      primary: true,
    },
    {
      address: 'kimura@mil.doshisha.ac.jp',
      label: { ja: '同志社大学', en: 'Doshisha University' },
    },
  ],
  orcid: '0000-0003-2441-9714',
  researchmap: 'https://researchmap.jp/yusuke-kimura',
  portrait: {
    src: '/portrait-640.jpg',
    alt: {
      ja: '木村 優介の顔写真',
      en: 'Portrait of Yusuke Kimura',
    },
  },
  links: [
    {
      label: { ja: 'ORCID', en: 'ORCID' },
      href: 'https://orcid.org/0000-0003-2441-9714',
    },
    {
      label: { ja: 'researchmap', en: 'researchmap' },
      href: 'https://researchmap.jp/yusuke-kimura',
    },
    {
      label: { ja: 'MIL ポートフォリオ', en: 'MIL Portfolio' },
      href: 'https://www-mil.cis.doshisha.ac.jp/portfolio/kimura-yusuke/',
    },
  ],
  keywords: [
    { ja: '自然言語処理', en: 'Natural Language Processing' },
    { ja: 'マルチタスク学習', en: 'Multi-task Learning' },
    { ja: '文書分類', en: 'Text Classification' },
    { ja: 'キーフレーズ抽出', en: 'Keyphrase Extraction' },
  ],
  fields: [
    { ja: '情報通信 / 知能情報学', en: 'Intelligent Informatics' },
    { ja: '情報通信 / データベース', en: 'Databases' },
    { ja: '情報通信 / ウェブ情報学・サービス情報学', en: 'Web & Service Informatics' },
  ],
};
