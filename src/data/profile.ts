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
    ja: '自然言語処理 / 大規模言語モデル / 事後学習',
    en: 'NLP · Large Language Models · Post-training',
  },
  bio: {
    ja: '自然言語処理を専門としています。これまでマルチタスク学習・文書分類・キーフレーズ抽出に取り組みました。現在は大規模言語モデルの事後学習に注力しており、特に効果的な On-policy Distillation の研究を進めています。共同研究では、効率的なアダプタ学習や社会的バイアスの緩和にも取り組んでいます。',
    en: 'My research is in natural language processing. Earlier work focused on multi-task learning, text classification, and keyphrase extraction. I am currently focused on post-training of large language models, in particular effective on-policy distillation. In collaborative work, I also contribute to efficient adapter learning and social bias mitigation.',
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
  openToOpportunities: {
    startFrom: {
      ja: '2027年4月着任可能',
      en: 'Available April 2027',
    },
    detail: {
      ja: '研究職を募集中（アカデミア・産業界とも）',
      en: 'Open to research positions in academia and industry',
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
    {
      label: { ja: 'X', en: 'X' },
      href: 'https://x.com/YusukeKimu19088',
    },
    {
      label: { ja: 'Facebook', en: 'Facebook' },
      href: 'https://www.facebook.com/yuusuke.kimura.581/',
    },
    {
      label: { ja: 'Instagram', en: 'Instagram' },
      href: 'https://www.instagram.com/usk_kimura_1996/',
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
