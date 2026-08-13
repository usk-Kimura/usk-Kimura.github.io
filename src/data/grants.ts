import type { GrantEntry, ServiceEntry } from './types';

export const grants: GrantEntry[] = [
  {
    title: {
      ja: '未十分学習ドメインへの言語モデル軽量適応に向けた学習時更新資源配分制御の研究',
      en: 'Controlling the Allocation of Update Resources during Training for Lightweight Language-Model Adaptation to Under-Trained Domains',
      zh: '面向训练不足领域语言模型轻量化适应的训练时更新资源分配控制研究',
      ko: '학습이 충분하지 않은 도메인에 대한 언어 모델 경량 적응을 위한 학습 시 갱신 자원 배분 제어 연구',
    },
    funder: {
      ja: '日本学術振興会 科学研究費助成事業 研究活動スタート支援',
      en: 'JSPS KAKENHI, Grant-in-Aid for Research Activity Start-up',
      zh: '日本学术振兴会 科学研究费补助事业（KAKENHI）研究活动启动支援',
      ko: '일본학술진흥회 과학연구비조성사업(KAKENHI) 연구활동 스타트업 지원',
    },
    number: '26K25590',
    start: '2026-07',
    end: '2028-03',
    role: { ja: '研究代表者', en: 'Principal Investigator', zh: '研究负责人', ko: '연구대표자' },
    category: 'funding',
    amountJpy: 2_600_000,
    url: 'https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-26K25590/',
  },
  {
    title: {
      ja: '複合指示・継続適応環境における大規模言語モデルアダプタ学習の干渉解析と高効率実験基盤の構築',
      en: 'Interference Analysis of LLM Adapter Learning under Composite Instructions and Continual Adaptation, and Construction of a High-Efficiency Experimental Platform',
      zh: '复合指令与持续适应环境下大语言模型（LLM）适配器学习的干扰分析与高效实验平台构建',
      ko: '복합 지시 및 지속 적응 환경에서의 대규모 언어 모델(LLM) 어댑터 학습 간섭 분석과 고효율 실험 플랫폼 구축',
    },
    funder: {
      ja: '学際大規模情報基盤共同利用・共同研究拠点 (JHPCN) 萌芽型共同研究課題',
      en: 'JHPCN Seed-Type Collaborative Research',
      zh: '跨学科大规模信息基础设施共同利用与共同研究基地（JHPCN）萌芽型共同研究课题',
      ko: '학제적 대규모 정보기반 공동이용·공동연구 거점(JHPCN) 맹아형 공동연구 과제',
    },
    start: '2026-06',
    end: '2027-03',
    category: 'hpc',
  },
  {
    title: {
      ja: '複合指示・継続適応環境における大規模言語モデルアダプタ学習の干渉解析と高効率実験基盤の構築',
      en: 'Interference Analysis of LLM Adapter Learning under Composite Instructions and Continual Adaptation, and Construction of a High-Efficiency Experimental Platform',
      zh: '复合指令与持续适应环境下大语言模型（LLM）适配器学习的干扰分析与高效实验平台构建',
      ko: '복합 지시 및 지속 적응 환경에서의 대규모 언어 모델(LLM) 어댑터 학습 간섭 분석과 고효율 실험 플랫폼 구축',
    },
    funder: {
      ja: '京都大学 スーパーコンピュータ共同研究制度（若手・女性研究者奨励枠）',
      en: 'Kyoto University Supercomputer Collaborative Research Program (Young/Female Researcher Track)',
      zh: '京都大学 超级计算机共同研究制度（青年、女性研究者奖励名额）',
      ko: '교토대학 슈퍼컴퓨터 공동연구 제도(신진·여성 연구자 장려 부문)',
    },
    start: '2026-06',
    end: '2027-03',
    category: 'hpc',
  },
  {
    title: {
      ja: '学習進度に応じた層別動的量子化に基づく高効率アダプタ学習法',
      en: 'Efficient Adapter Learning via Layer-wise Dynamic Quantization Driven by Training Progress',
      zh: '基于训练进度的逐层动态量化高效适配器学习方法',
      ko: '학습 진도에 따른 계층별 동적 양자화에 기반한 고효율 어댑터 학습 기법',
    },
    funder: {
      ja: '東京大学情報基盤センター 若手・女性利用者推薦',
      en: 'University of Tokyo Information Technology Center, Young/Female User Recommendation',
      zh: '东京大学信息基础设施中心 青年、女性用户推荐',
      ko: '도쿄대학 정보기반센터 신진·여성 이용자 추천',
    },
    start: '2026-04',
    end: '2027-03',
    role: { ja: '研究代表者', en: 'Principal Investigator', zh: '研究负责人', ko: '연구대표자' },
    category: 'hpc',
  },
  {
    title: {
      ja: '量子化スケジューラによる効率的なLLMアダプタ学習手法の開発',
      en: 'Development of Efficient LLM Adapter Learning with a Quantization Scheduler',
      zh: '基于量化调度器的大语言模型（LLM）高效适配器学习方法开发',
      ko: '양자화 스케줄러를 활용한 대규모 언어 모델(LLM) 어댑터의 효율적 학습 기법 개발',
    },
    funder: {
      ja: '学際大規模情報基盤共同利用・共同研究拠点 (JHPCN) 萌芽型共同研究課題',
      en: 'JHPCN Seed-Type Collaborative Research',
      zh: '跨学科大规模信息基础设施共同利用与共同研究基地（JHPCN）萌芽型共同研究课题',
      ko: '학제적 대규모 정보기반 공동이용·공동연구 거점(JHPCN) 맹아형 공동연구 과제',
    },
    start: '2025-09',
    end: '2026-03',
    number: 'EX25407',
    category: 'hpc',
  },
  {
    title: {
      ja: '量子化スケジューラによる効率的なLLMアダプタ学習手法の開発',
      en: 'Development of Efficient LLM Adapter Learning with a Quantization Scheduler',
      zh: '基于量化调度器的大语言模型（LLM）高效适配器学习方法开发',
      ko: '양자화 스케줄러를 활용한 대규모 언어 모델(LLM) 어댑터의 효율적 학습 기법 개발',
    },
    funder: {
      ja: '東京科学大学 TSUBAME 若手・女性利用者支援制度',
      en: 'Science Tokyo TSUBAME Young/Female User Support Program',
      zh: '东京科学大学 TSUBAME 青年、女性用户支援制度',
      ko: '도쿄과학대학 TSUBAME 신진·여성 이용자 지원 제도',
    },
    start: '2025-09',
    end: '2026-03',
    category: 'hpc',
  },
];

export const services: ServiceEntry[] = [
  {
    title: { ja: 'EMNLP Workshop Reviewer', en: 'EMNLP Workshop Reviewer', zh: 'EMNLP 研讨会审稿人', ko: 'EMNLP 워크숍 심사위원' },
    kind: { ja: '査読', en: 'Peer Review', zh: '同行评审', ko: '동료 심사(피어 리뷰)' },
    start: '2024-10-01',
    end: '2024-10-31',
  },
  {
    title: {
      ja: '「Wikipedia + 拡張固有表現」構造化プロジェクト Task 1 分類',
      en: 'Wikipedia + Extended Named Entity Structuring Project (Task 1: Classification)',
      zh: '“Wikipedia + 扩展命名实体”结构化项目 Task 1 分类',
      ko: '“Wikipedia + 확장 개체명” 구조화 프로젝트 Task 1 분류',
    },
    kind: { ja: 'その他', en: 'Other', zh: '其他', ko: '기타' },
    organization: {
      ja: '理化学研究所 革新知能統合研究センター 言語情報アクセス技術チーム',
      en: 'RIKEN AIP, Language Information Access Technology Team',
      zh: '理化学研究所 革新智能综合研究中心（RIKEN AIP）语言信息访问技术团队',
      ko: '이화학연구소 혁신지능통합연구센터(RIKEN AIP) 언어정보 접근기술팀',
    },
    start: '2022-10-01',
    end: '2023-03-31',
  },
];
