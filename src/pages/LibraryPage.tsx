import { Card, Descriptions, Empty, List, Space, Tag, Typography } from 'antd';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { libraries } from '../data';

export function LibraryPage() {
  const { libraryId } = useParams();
  const library = useMemo(() => libraries.find((item) => item.id === libraryId), [libraryId]);

  if (!library) {
    return <Empty description="未找到对应知识库" />;
  }

  const mockItems = Array.from({ length: 5 }).map((_, index) => ({
    key: `${library.id}-${index + 1}`,
    name: `${library.name}规则 ${index + 1}`,
    status: index === 4 ? '待复核' : '生效中'
  }));

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card>
        <Typography.Title level={4}>{library.name}</Typography.Title>
        <Typography.Paragraph type="secondary">{library.description}</Typography.Paragraph>
        <Descriptions column={2}>
          <Descriptions.Item label="规则总数">{library.count}</Descriptions.Item>
          <Descriptions.Item label="归属部门">{library.owner}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="规则列表">
        <List
          dataSource={mockItems}
          renderItem={(item) => (
            <List.Item>
              <Space>
                <Typography.Text>{item.name}</Typography.Text>
                <Tag color={item.status === '生效中' ? 'green' : 'orange'}>{item.status}</Tag>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    </Space>
  );
}
