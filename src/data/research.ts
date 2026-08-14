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
      ja: 'ByteTop-k OPD：語彙の異なる LLM 間のオンポリシ蒸留',
      en: 'ByteTop-k OPD for LLMs with Different Vocabularies',
      zh: 'ByteTop-k OPD：不同词表 LLM 之间的同策略蒸馏',
      ko: 'ByteTop-k OPD: 어휘가 다른 LLM 간의 온폴리시 증류',
    },
    description: {
      ja: '教師と生徒で語彙・トークナイザが異なる場合の On-policy Distillation を研究しています。現在は、生徒が実際に生成したトークンと各文脈で高い確率を置く次トークン候補を、バイト列上の共通ラベルとして扱う ByteTop-k OPD を開発しています。疎で動的な候補監督が、下流性能と教師信号の計算コストにどう影響するかを検証しています。',
      en: 'I study on-policy distillation between teacher and student LLMs with different vocabularies or tokenizers. My current work develops ByteTop-k OPD, which treats the student\'s generated token and high-probability next-token candidates as shared byte-string labels. I investigate how this sparse, dynamic candidate supervision affects downstream accuracy and teacher-scoring cost.',
      zh: '研究词表或分词器不同的教师大语言模型与学生大语言模型之间的同策略蒸馏。目前正在开发 ByteTop-k OPD，将学生模型实际生成的词元及其高概率下一词元候选作为基于字节串的共享标签，并考察这种稀疏、动态的候选监督如何影响下游准确率和教师模型评分成本。',
      ko: '어휘 또는 토크나이저가 서로 다른 교사·학생 LLM 간의 온폴리시 증류를 연구합니다. 현재 학생 모델이 실제로 생성한 토큰과 확률이 높은 다음 토큰 후보를 바이트열 기반의 공통 레이블로 다루는 ByteTop-k OPD를 개발하고 있으며, 이러한 희소하고 동적인 후보 감독이 다운스트림 정확도와 교사 모델 채점 비용에 미치는 영향을 검증하고 있습니다.',
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
