import type { Profile } from './types';

const researchmapUrl = 'https://researchmap.jp/kimura_yusuke';

export const profile: Profile = {
  name: { ja: '木村 優介', en: 'Yusuke Kimura', zh: '木村 优介', ko: '기무라 유스케' },
  reading: {
    ja: 'キムラ ユウスケ',
    en: 'Kimura Yusuke',
    zh: 'Yusuke Kimura',
    ko: '기무라 유스케',
  },
  affiliation: {
    ja: '名古屋大学 大学院情報学研究科 知能システム学専攻',
    en: 'Graduate School of Informatics, Department of Intelligent Systems, Nagoya University',
    zh: '名古屋大学 研究生院信息学研究科 智能系统学专业',
    ko: '나고야대학 대학원 정보학연구과 지능시스템학 전공',
  },
  position: {
    ja: '科学技術振興機構 戦略的創造研究推進事業 研究員（CREST雇用）',
    en: 'Researcher, JST CREST (Strategic Basic Research Programs)',
    zh: '日本科学技术振兴机构（JST）战略性创造研究推进事业（CREST）研究员',
    ko: '일본과학기술진흥기구(JST) 전략적창조연구추진사업(CREST) 연구원',
  },
  degree: {
    ja: '博士（文化情報学）（2026年3月、同志社大学）',
    en: 'Ph.D. in Culture and Information Science (Doshisha University, Mar. 2026)',
    zh: '博士（文化信息学）（2026年3月，同志社大学）',
    ko: '박사(문화정보학) (2026년 3월, 도시샤대학)',
  },
  tagline: {
    ja: '自然言語処理 / LLM の事後学習 / 異語彙間知識蒸留',
    en: 'NLP · LLM Post-training · Cross-tokenizer Distillation',
    zh: '自然语言处理 / 大语言模型后训练 / 跨分词器知识蒸馏',
    ko: '자연어 처리 / LLM 사후 학습 / 토크나이저 간 지식 증류',
  },
  bio: {
    ja: '大規模言語モデルの事後学習、特に語彙・トークナイザの異なる教師と生徒の間で行う On-policy Distillation を研究しています。現在は、生徒が実際に生成したトークンと高確率な次トークン候補をバイト列上の共通ラベルへ写像し、語彙の違いを越えて教師信号を与える ByteTop-k OPD を開発・検証しています。これまでマルチタスク学習・文書分類・キーフレーズ抽出にも取り組み、共同研究では効率的なアダプタ学習や社会的バイアスの緩和にも関わっています。',
    en: 'I study LLM post-training, particularly on-policy distillation between teacher and student models with different vocabularies and tokenizers. My current work develops and evaluates ByteTop-k OPD, which maps the student\'s generated token and high-probability next-token candidates to shared byte-string labels so that teacher supervision can cross tokenizer boundaries. My earlier work spans multi-task learning, text classification, and keyphrase extraction, and in collaborative projects I also work on efficient adapter learning and social bias mitigation.',
    zh: '我研究大语言模型（LLM）的后训练，尤其关注词表与分词器不同的教师模型和学生模型之间的 On-policy Distillation（同策略蒸馏）。目前，我正在开发和评估 ByteTop-k OPD：将学生模型实际生成的词元及其高概率下一词元候选映射为基于字节串的共享标签，从而跨越分词器差异提供教师监督。此前我还开展过多任务学习、文本分类和关键短语抽取研究，并在合作研究中参与高效适配器学习与社会偏见缓解。',
    ko: '대규모 언어 모델(LLM)의 사후 학습, 특히 어휘와 토크나이저가 서로 다른 교사·학생 모델 간의 On-policy Distillation(온폴리시 증류)을 연구합니다. 현재는 학생 모델이 실제로 생성한 토큰과 확률이 높은 다음 토큰 후보를 바이트열 기반의 공통 레이블로 사상하여 토크나이저 차이를 넘어 교사 신호를 제공하는 ByteTop-k OPD를 개발하고 검증하고 있습니다. 그동안 멀티태스크 학습, 문서 분류, 키프레이즈 추출도 연구했으며, 공동 연구에서는 효율적인 어댑터 학습과 사회적 편향 완화에도 참여하고 있습니다.',
  },
  emails: [
    {
      address: 'kimura.yusuke.p2@f.mail.nagoya-u.ac.jp',
      label: { ja: '名古屋大学', en: 'Nagoya University', zh: '名古屋大学', ko: '나고야대학' },
      primary: true,
    },
    {
      address: 'kimura@mil.doshisha.ac.jp',
      label: { ja: '同志社大学', en: 'Doshisha University', zh: '同志社大学', ko: '도시샤대학' },
    },
  ],
  orcid: '0000-0003-2441-9714',
  researchmap: researchmapUrl,
  identifiers: {
    researcherNumber: '91041002',
    jGlobalId: '202101017410101550',
    researchmapMemberId: 'R000022171',
  },
  researchmapUpdated: '2026-08-14',
  portrait: {
    src: '/portrait-640.jpg',
    alt: {
      ja: '木村 優介の顔写真',
      en: 'Portrait of Yusuke Kimura',
      zh: '木村 优介的肖像照片',
      ko: '기무라 유스케의 프로필 사진',
    },
  },
  openToOpportunities: {
    startFrom: {
      ja: '2027年4月着任可能',
      en: 'Available April 2027',
      zh: '2027年4月起可到岗',
      ko: '2027년 4월 부임 가능',
    },
    detail: {
      ja: 'ポスドク・助教・研究員・企業研究職を希望（NLP / LLM、アカデミア・産業界とも）',
      en: 'Seeking postdoc, faculty-track, or research-scientist roles in NLP / LLMs (academia or industry)',
      zh: '希望从事博士后、助理教授、研究员或企业研究等工作（NLP / LLM 领域，学术界与产业界均可）',
      ko: '박사후연구원·조교수·연구원·기업 연구직 희망 (NLP / LLM 분야, 학계·산업계 모두 가능)',
    },
  },
  links: [
    {
      label: { ja: 'Google Scholar', en: 'Google Scholar', zh: 'Google Scholar', ko: 'Google Scholar' },
      href: 'https://scholar.google.com/citations?user=rIZnNYIAAAAJ',
    },
    {
      label: { ja: 'ORCID', en: 'ORCID', zh: 'ORCID', ko: 'ORCID' },
      href: 'https://orcid.org/0000-0003-2441-9714',
    },
    {
      label: { ja: 'researchmap', en: 'researchmap', zh: 'researchmap', ko: 'researchmap' },
      href: researchmapUrl,
    },
    {
      label: { ja: 'MIL ポートフォリオ', en: 'MIL Portfolio', zh: 'MIL 研究档案', ko: 'MIL 포트폴리오' },
      href: 'https://www.milcis.doshisha.ac.jp/portfolio/kimura-yusuke/',
    },
    {
      label: { ja: 'X', en: 'X', zh: 'X', ko: 'X' },
      href: 'https://x.com/YusukeKimu19088',
      social: true,
    },
    {
      label: { ja: 'Facebook', en: 'Facebook', zh: 'Facebook', ko: 'Facebook' },
      href: 'https://www.facebook.com/yuusuke.kimura.581/',
      social: true,
    },
    {
      label: { ja: 'Instagram', en: 'Instagram', zh: 'Instagram', ko: 'Instagram' },
      href: 'https://www.instagram.com/usk_kimura_1996/',
      social: true,
    },
  ],
  keywords: [
    {
      ja: '大規模言語モデルの事後学習',
      en: 'LLM Post-training',
      zh: '大语言模型（LLM）的后训练',
      ko: '대규모 언어 모델(LLM) 사후 학습',
    },
    {
      ja: 'On-policy Distillation',
      en: 'On-policy Distillation',
      zh: 'On-policy Distillation（同策略蒸馏）',
      ko: 'On-policy Distillation(온폴리시 증류)',
    },
    {
      ja: 'ByteTop-k OPD',
      en: 'ByteTop-k OPD',
      zh: 'ByteTop-k OPD',
      ko: 'ByteTop-k OPD',
    },
    {
      ja: '異語彙間知識蒸留',
      en: 'Cross-tokenizer Knowledge Distillation',
      zh: '跨分词器知识蒸馏',
      ko: '토크나이저 간 지식 증류',
    },
    {
      ja: '効率的なアダプタ学習',
      en: 'Efficient Adapter Learning',
      zh: '高效的适配器学习',
      ko: '효율적인 어댑터 학습',
    },
    {
      ja: '自然言語処理',
      en: 'Natural Language Processing',
      zh: '自然语言处理',
      ko: '자연어 처리',
    },
    { ja: 'マルチタスク学習', en: 'Multi-task Learning', zh: '多任务学习', ko: '멀티태스크 학습' },
    { ja: '文書分類', en: 'Text Classification', zh: '文本分类', ko: '문서 분류' },
    { ja: 'キーフレーズ抽出', en: 'Keyphrase Extraction', zh: '关键短语抽取', ko: '키프레이즈 추출' },
  ],
  fields: [
    {
      ja: '情報通信 / 知能情報学',
      en: 'Intelligent Informatics',
      zh: '信息通信 / 智能信息学',
      ko: '정보통신 / 지능정보학',
    },
    {
      ja: '情報通信 / データベース',
      en: 'Databases',
      zh: '信息通信 / 数据库',
      ko: '정보통신 / 데이터베이스',
    },
    {
      ja: '情報通信 / ウェブ情報学、サービス情報学',
      en: 'Web & Service Informatics',
      zh: '信息通信 / 网络信息学、服务信息学',
      ko: '정보통신 / 웹 정보학, 서비스 정보학',
    },
  ],
};
