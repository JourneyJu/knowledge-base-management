export interface LibrarySummary {
  id: string;
  name: string;
  description: string;
  count: number;
  owner: string;
}

export const libraries: LibrarySummary[] = [
  {
    id: 'process',
    name: '管理制度流程库',
    description: '沉淀合同审批制度、授权规则与流程规范。',
    count: 156,
    owner: '法务与流程管理中心'
  },
  {
    id: 'science',
    name: '管理科学库',
    description: '沉淀审批决策模型、风险评估方法和管理规则。',
    count: 89,
    owner: '经营管理中心'
  },
  {
    id: 'behavior',
    name: '审批行为习惯库',
    description: '沉淀历史审批行为、偏好画像与共性关注点。',
    count: 67,
    owner: '审计与风险控制中心'
  }
];

export const analysisCards = [
  { title: '一致性分析', value: '82.4%', description: '审批判断与履约结果的一致性' },
  { title: '无效审批案例', value: '42', description: '需要回溯复盘的重点样本' },
  { title: 'AI 采纳率', value: '76.8%', description: '审批人采纳智能建议的占比' }
];

export const sampleRules = [
  {
    title: '合同金额分级审批规则',
    library: '管理制度流程库',
    status: '生效中'
  },
  {
    title: '高风险条款识别模型',
    library: '管理科学库',
    status: '生效中'
  },
  {
    title: '财务审批关注维度画像',
    library: '审批行为习惯库',
    status: '待复核'
  }
];
