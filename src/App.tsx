import { BookOutlined, ClusterOutlined, DotChartOutlined, FundOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { LibraryPage } from './pages/LibraryPage';
import { AnalysisPage } from './pages/AnalysisPage';

const { Header, Sider, Content } = Layout;

export default function App() {
  const location = useLocation();

  return (
    <Layout className="kb-layout">
      <Sider width={260} theme="light" className="kb-sider">
        <div className="kb-brand">
          <Typography.Title level={4} className="kb-brand-title">
            Knowledge Base Management
          </Typography.Title>
          <Typography.Text className="kb-brand-subtitle">
            独立知识库与合同回溯分析平台
          </Typography.Text>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: '/',
              icon: <BookOutlined />,
              label: <Link to="/">知识库总览</Link>
            },
            {
              key: '/libraries/process',
              icon: <ClusterOutlined />,
              label: <Link to="/libraries/process">管理制度流程库</Link>
            },
            {
              key: '/libraries/science',
              icon: <FundOutlined />,
              label: <Link to="/libraries/science">管理科学库</Link>
            },
            {
              key: '/libraries/behavior',
              icon: <DotChartOutlined />,
              label: <Link to="/libraries/behavior">审批行为习惯库</Link>
            },
            {
              key: '/analysis',
              icon: <FundOutlined />,
              label: <Link to="/analysis">合同回溯分析</Link>
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header className="kb-header">
          <div>
            <Typography.Title level={3} className="kb-page-title">
              知识库管理分析平台
            </Typography.Title>
            <Typography.Text className="kb-page-subtitle">
              该项目已从宿主系统拆出，独立承载知识库、审计、统计和合同回溯分析能力。
            </Typography.Text>
          </div>
        </Header>
        <Content className="kb-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/libraries/:libraryId" element={<LibraryPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
