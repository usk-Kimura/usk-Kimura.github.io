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
    ja: '大規模言語モデルを、事前学習の後に効率的かつ信頼できる形で適応させる方法を研究しています。現在の主軸は On-policy Distillation（生徒モデルが自ら生成した出力の上で教師から学ぶ手法）です。これまでマルチタスク学習・文書分類・キーフレーズ抽出にも取り組み、共同研究では効率的なアダプタ学習や社会的バイアスの緩和にも関わっています。',
    en: 'I study how to adapt large language models efficiently and reliably after pretraining. My current focus is on-policy distillation — training a student model from teacher feedback on the student\'s own generated outputs. My earlier work spans multi-task learning, text classification, and keyphrase extraction, and in collaborative projects I also work on efficient adapter learning and social bias mitigation.',
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
      ja: 'ポスドク・助教・研究員・企業研究職を希望（NLP / LLM、アカデミア・産業界とも）',
      en: 'Seeking postdoc, faculty-track, or research-scientist roles in NLP / LLMs (academia or industry)',
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
      social: true,
    },
    {
      label: { ja: 'Facebook', en: 'Facebook' },
      href: 'https://www.facebook.com/yuusuke.kimura.581/',
      social: true,
    },
    {
      label: { ja: 'Instagram', en: 'Instagram' },
      href: 'https://www.instagram.com/usk_kimura_1996/',
      social: true,
    },
  ],
  keywords: [
    { ja: '大規模言語モデルの事後学習', en: 'LLM Post-training' },
    { ja: 'On-policy Distillation', en: 'On-policy Distillation' },
    { ja: '効率的なアダプタ学習', en: 'Efficient Adapter Learning' },
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
