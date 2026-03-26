import { Alert, Card, Col, Row, Space, Statistic, Table, Typography } from 'antd';

const data = [
  {
    key: '1',
    contractNo: 'CHJH-2026-001',
    approver: '张敏',
    aiSuggestion: '条件性通过',
    actualResult: '发生延期',
    conclusion: '建议补充付款节点与违约责任'
  },
  {
    key: '2',
    contractNo: 'CHJH-2026-002',
    approver: '赵雷',
    aiSuggestion: '通过',
    actualResult: '履约正常',
    conclusion: '模型建议与结果一致'
  }
];

export function AnalysisPage() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card>
        <Typography.Title level={4}>合同回溯分析</Typography.Title>
        <Typography.Paragraph type="secondary">
          当前版本先完成独立分析站点入口，后续会继续补充一致性分析、审批画像、规则优化建议等完整模块。
        </Typography.Paragraph>
        <Alert
          type="info"
          showIcon
          message="拆分边界"
          description="该应用独立承载回溯分析与知识运营能力，不再和宿主项目系统共享路由与布局。"
        />
      </Card>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card><Statistic title="一致性分析" value={82.4} suffix="%" /></Card>
        </Col>
        <Col span={8}>
          <Card><Statistic title="无效审批样本" value={42} /></Card>
        </Col>
        <Col span={8}>
          <Card><Statistic title="规则优化建议" value={18} /></Card>
        </Col>
      </Row>

      <Card title="重点回溯样本">
        <Table
          dataSource={data}
          pagination={false}
          columns={[
            { title: '合同编号', dataIndex: 'contractNo' },
            { title: '审批人', dataIndex: 'approver' },
            { title: 'AI 建议', dataIndex: 'aiSuggestion' },
            { title: '实际结果', dataIndex: 'actualResult' },
            { title: '结论', dataIndex: 'conclusion' }
          ]}
        />
      </Card>
    </Space>
  );
}
