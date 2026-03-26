import { Card, Col, List, Row, Space, Statistic, Tag, Typography } from 'antd';
import { analysisCards, libraries, sampleRules } from '../data';

export function DashboardPage() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card>
        <Typography.Title level={4}>知识库总览</Typography.Title>
        <Typography.Paragraph type="secondary">
          第一版独立应用优先完成站点边界重建，后续再逐步承接审批、审计日志、统计和规则运营能力。
        </Typography.Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        {libraries.map((item) => (
          <Col span={8} key={item.id}>
            <Card title={item.name}>
              <Space direction="vertical">
                <Typography.Text>{item.description}</Typography.Text>
                <Typography.Text type="secondary">归属部门：{item.owner}</Typography.Text>
                <Tag color="teal">{item.count} 条规则</Tag>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        {analysisCards.map((item) => (
          <Col span={8} key={item.title}>
            <Card>
              <Statistic title={item.title} value={item.value} />
              <Typography.Paragraph type="secondary" style={{ marginTop: 12, marginBottom: 0 }}>
                {item.description}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Card title="重点规则样例">
        <List
          dataSource={sampleRules}
          renderItem={(item) => (
            <List.Item>
              <Space>
                <Typography.Text strong>{item.title}</Typography.Text>
                <Tag>{item.library}</Tag>
                <Tag color={item.status === '生效中' ? 'green' : 'orange'}>{item.status}</Tag>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    </Space>
  );
}
