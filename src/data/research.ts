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
      ja: 'LLM 事後学習のための On-policy Distillation',
      en: 'On-policy Distillation for LLM Post-training',
    },
    description: {
      ja: '大規模言語モデルの事後学習において、生徒モデルが自ら生成した出力の上で教師から学ぶ On-policy Distillation を研究しています。学習時と推論時の分布のずれを抑えつつ、効率的に能力を転移させることを目指しています。',
      en: 'I study on-policy distillation for LLM post-training, where the student learns from a teacher on its own generated outputs — transferring capabilities efficiently while reducing the train/inference distribution shift.',
    },
    tag: { ja: '主軸', en: 'Primary focus' },
  },
  {
    title: {
      ja: '限られた計算資源での効率的アダプタ学習',
      en: 'Efficient Adapter Learning under Limited Compute',
    },
    description: {
      ja: '量子化スケジューラや学習進度に応じた層別動的量子化など、限られた計算資源で大規模言語モデルを適応させる手法を共同研究しています。複数の HPC 採択課題に支えられています。',
      en: 'Methods that adapt LLMs under tight compute budgets — quantization scheduling and training-progress-driven layer-wise dynamic quantization. Backed by several competitive HPC allocations.',
    },
    tag: { ja: '共同研究', en: 'Collaborative' },
  },
  {
    title: {
      ja: '信頼性の高い適応：バイアス緩和と知識接地生成',
      en: 'Reliable Adaptation: Bias Mitigation & Grounded Generation',
    },
    description: {
      ja: '活性化ステアリングによる社会的バイアスの緩和や、外部知識を優先した出力生成など、大規模言語モデルをより信頼できる形で適応させる研究に共同で取り組んでいます。',
      en: 'Making LLM adaptation more trustworthy — social bias mitigation via activation steering and knowledge-prioritized generation (collaborative work).',
    },
    tag: { ja: '共同研究', en: 'Collaborative' },
  },
];
