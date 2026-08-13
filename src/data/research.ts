import type { LocalizedString } from './types';

export type ResearchAgendaItem = {
  title: LocalizedString;
  /** One-paragraph description of the thrust. */
  description: LocalizedString;
  /** Short role tag, e.g. primary vs collaborative. */
  tag: LocalizedString;
};

// NOTE: review/edit this narrative — it frames the research story for hiring
// committees. The first item is the personal focus; the others are
// collaborative threads grounded in recent publications and HPC support.
export const researchAgenda: ResearchAgendaItem[] = [
  {
    title: {
      ja: 'LLM を効率よく事後適応させる On-policy Distillation',
      en: 'Efficiently adapting LLMs with on-policy distillation',
      zh: '高效实现 LLM 后训练适配的 On-policy Distillation（同策略蒸馏）',
      ko: 'LLM을 효율적으로 사후 적응시키는 On-policy Distillation(온폴리시 증류)',
    },
    description: {
      ja: '大規模言語モデルの事後学習において、生徒モデルが自ら生成した出力の上で教師から学ぶ On-policy Distillation を研究しています。学習時と推論時の分布のずれを抑えつつ、効率的に能力を転移させることを目指しています。',
      en: 'I study on-policy distillation for LLM post-training, where the student learns from a teacher on its own generated outputs — transferring capabilities efficiently while reducing the train/inference distribution shift.',
      zh: '在大语言模型（LLM）的后训练中，主要研究让学生模型在自身生成的输出上向教师模型学习的 On-policy Distillation（同策略蒸馏）。旨在抑制训练与推理之间的分布偏移，同时高效地实现能力迁移。',
      ko: '대규모 언어 모델(LLM)의 사후 학습(post-training)에서, 학생 모델이 스스로 생성한 출력을 바탕으로 교사 모델로부터 배우는 On-policy Distillation(온폴리시 증류)을 연구하고 있습니다. 학습 시와 추론 시의 분포 차이를 억제하면서 능력을 효율적으로 전이하는 것을 목표로 합니다.',
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
      ja: '量子化スケジューラや学習進度に応じた層別動的量子化など、限られた計算資源で大規模言語モデルを適応させる手法を共同研究しています。複数の HPC 採択課題に支えられています。',
      en: 'Methods that adapt LLMs under tight compute budgets — quantization scheduling and training-progress-driven layer-wise dynamic quantization. Backed by several competitive HPC allocations.',
      zh: '与合作者共同研究在有限计算资源下适配大语言模型（LLM）的方法，例如量化调度器，以及依据训练进度进行调整的分层动态量化。相关工作得到多项获批的 HPC 计算资源课题的支持。',
      ko: '양자화 스케줄러, 학습 진행 정도에 따른 계층별 동적 양자화 등, 제한된 계산 자원에서 대규모 언어 모델(LLM)을 적응시키는 방법을 공동으로 연구하고 있습니다. 여러 건의 HPC 계산 자원 배분 과제에 선정되어 지원을 받고 있습니다.',
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
      ja: '活性化ステアリングによる社会的バイアスの緩和や、外部知識を優先した出力生成など、大規模言語モデルをより信頼できる形で適応させる研究に共同で取り組んでいます。',
      en: 'Making LLM adaptation more trustworthy — social bias mitigation via activation steering and knowledge-prioritized generation (collaborative work).',
      zh: '与合作者共同研究如何以更可信的方式适配大语言模型（LLM），包括利用激活引导（activation steering）缓解社会偏见，以及优先依据外部知识生成输出。',
      ko: '활성화 스티어링(activation steering)을 통한 사회적 편향 완화, 외부 지식을 우선시하는 출력 생성 등, 대규모 언어 모델(LLM)을 보다 신뢰할 수 있는 방식으로 적응시키는 연구를 공동으로 수행하고 있습니다.',
    },
    tag: { ja: '共同研究', en: 'Collaborative', zh: '合作研究', ko: '공동 연구' },
  },
];
