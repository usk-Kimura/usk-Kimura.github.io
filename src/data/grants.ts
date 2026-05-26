import type { GrantEntry, ServiceEntry } from './types';

export const grants: GrantEntry[] = [
  {
    title: {
      ja: '複合指示・継続適応環境における大規模言語モデルアダプタ学習の干渉解析と高効率実験基盤の構築',
      en: 'Interference Analysis of LLM Adapter Learning under Composite Instructions and Continual Adaptation, and Construction of a High-Efficiency Experimental Platform',
    },
    funder: {
      ja: '京都大学 スーパーコンピュータ共同研究制度（若手・女性研究者奨励枠）',
      en: 'Kyoto University Supercomputer Collaborative Research Program (Young/Female Researcher Track)',
    },
    start: '2026-06',
    end: '2027-03',
  },
  {
    title: {
      ja: '学習進度に応じた層別動的量子化に基づく高効率アダプタ学習法',
      en: 'Efficient Adapter Learning via Layer-wise Dynamic Quantization Driven by Training Progress',
    },
    funder: {
      ja: '東京大学情報基盤センター 若手・女性利用者推薦',
      en: 'University of Tokyo Information Technology Center, Young/Female User Recommendation',
    },
    start: '2026-04',
    end: '2027-03',
  },
  {
    title: {
      ja: '量子化スケジューラによる効率的なLLMアダプタ学習手法の開発',
      en: 'Development of Efficient LLM Adapter Learning with a Quantization Scheduler',
    },
    funder: {
      ja: '学際大規模情報基盤共同利用・共同研究拠点 萌芽型共同研究課題',
      en: 'JHPCN Seed-Type Collaborative Research',
    },
    start: '2025-09',
    end: '2026-03',
  },
  {
    title: {
      ja: '量子化スケジューラによる効率的なLLMアダプタ学習手法の開発',
      en: 'Development of Efficient LLM Adapter Learning with a Quantization Scheduler',
    },
    funder: {
      ja: '東京科学大学 TSUBAME 若手・女性利用者支援制度',
      en: 'Science Tokyo TSUBAME Young/Female User Support Program',
    },
    start: '2025-09',
    end: '2026-03',
  },
];

export const services: ServiceEntry[] = [
  {
    title: { ja: 'EMNLP Workshop Reviewer', en: 'EMNLP Workshop Reviewer' },
    kind: { ja: '査読', en: 'Peer Review' },
    start: '2024-10-01',
    end: '2024-10-31',
  },
  {
    title: {
      ja: '「Wikipedia + 拡張固有表現」構造化プロジェクト Task 1 分類',
      en: 'Wikipedia + Extended Named Entity Structuring Project (Task 1: Classification)',
    },
    kind: { ja: 'その他', en: 'Other' },
    organization: {
      ja: '理化学研究所 革新知能統合研究センター 言語情報アクセス技術チーム',
      en: 'RIKEN AIP, Language Information Access Technology Team',
    },
    start: '2022-10-01',
    end: '2023-03-31',
  },
];
