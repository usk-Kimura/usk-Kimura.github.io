import type { LocalizedString } from './types';

export type ResearchAgendaItem = {
  title: LocalizedString;
  /** One-paragraph description of the thrust. */
  description: LocalizedString;
  /** Short role tag, e.g. primary vs collaborative. */
  tag: LocalizedString;
};

// NOTE: this is the scan layer, not the full story — a fellow researcher should
// get each thread in one glance. Keep every description to a single sentence:
// what problem, what approach. Detail belongs in the publications and the
// poster/paper themselves. The first item is the personal focus; the others are
// collaborative threads grounded in recent publications and HPC support.
export const researchAgenda: ResearchAgendaItem[] = [
  {
    title: {
      ja: '語彙・トークナイザの異なる LLM 間の知識蒸留',
      en: 'Knowledge Distillation between LLMs with Different Vocabularies and Tokenizers',
      zh: '词表与分词器不同的 LLM 之间的知识蒸馏',
      ko: '어휘와 토크나이저가 다른 LLM 간 지식 증류',
    },
    description: {
      ja: '語彙やトークンの区切り方が異なるため直接比較できない教師モデルと生徒モデルの出力を共通の表現上で対応づけることで、トークナイザを共有しない LLM 間でも知識を移せる事後学習を研究しています。',
      en: 'I study post-training methods that align otherwise incomparable teacher and student outputs through a shared representation, enabling knowledge transfer between LLMs whose vocabularies and token boundaries differ.',
      zh: '针对教师模型与学生模型因词表和词元切分方式不同而难以直接比较输出的问题，我研究将双方输出对齐到统一表示形式的后训练方法，使不共享同一分词器的 LLM 之间也能迁移知识。',
      ko: '교사 모델과 학생 모델의 어휘와 토큰 분할 방식이 달라 출력을 직접 비교하기 어려운 문제를 해결하기 위해, 두 모델의 출력을 공통 표현으로 정렬하여 같은 토크나이저를 사용하지 않는 LLM 사이에서도 지식을 이전할 수 있는 사후 학습 방법을 연구합니다.',
    },
    tag: { ja: '主軸', en: 'Primary focus', zh: '主攻方向', ko: '핵심 연구' },
  },
  {
    title: {
      ja: '限られた計算資源での効率的アダプタ学習',
      en: 'Efficient Adapter Learning under Limited Compute',
      zh: '有限计算资源下的高效适配器学习',
      ko: '제한된 계산 자원에서의 효율적인 어댑터 학습',
    },
    description: {
      ja: '量子化スケジューラや学習進度に応じた層別動的量子化により、限られた計算資源で LLM を適応させる手法（HPC 採択課題に基づく共同研究）。',
      en: 'Adapting LLMs under tight compute budgets via quantization scheduling and training-progress-driven layer-wise dynamic quantization (collaborative, backed by competitive HPC allocations).',
      zh: '通过量化调度器与依据训练进度调整的分层动态量化，在有限计算资源下适配大语言模型（基于获批 HPC 课题的合作研究）。',
      ko: '양자화 스케줄러와 학습 진행도에 따른 계층별 동적 양자화로, 제한된 계산 자원에서 LLM을 적응시키는 방법(HPC 배분 과제에 기반한 공동 연구).',
    },
    tag: { ja: '共同研究', en: 'Collaborative', zh: '合作研究', ko: '공동 연구' },
  },
  {
    title: {
      ja: '信頼性の高い適応：バイアス緩和と知識接地生成',
      en: 'Reliable Adaptation: Bias Mitigation & Grounded Generation',
      zh: '高可靠性适配：偏见缓解与知识接地生成',
      ko: '신뢰할 수 있는 적응: 편향 완화와 지식 기반 생성',
    },
    description: {
      ja: '活性化ステアリングによる社会的バイアスの緩和と、外部知識を優先した出力生成による、信頼できる LLM 適応の研究（共同研究）。',
      en: 'Trustworthy LLM adaptation through social-bias mitigation with activation steering and knowledge-prioritized generation (collaborative).',
      zh: '通过激活引导（activation steering）缓解社会偏见，并优先依据外部知识生成输出，实现更可信的大语言模型适配（合作研究）。',
      ko: '활성화 스티어링을 통한 사회적 편향 완화와 외부 지식을 우선하는 출력 생성으로, 신뢰할 수 있는 LLM 적응을 연구합니다(공동 연구).',
    },
    tag: { ja: '共同研究', en: 'Collaborative', zh: '合作研究', ko: '공동 연구' },
  },
];
