import { Outlet, Navigate } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { useAuth } from '../../lib/auth'
import { Spinner } from '../ui/Spinner'

const { Header, Content } = Layout

export function MainLayout() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <Spinner />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <Typography.Title level={4} style={{ margin: 0 }}>Dashboard</Typography.Title>
        <Space>
          <Typography.Text type="secondary">Welcome!</Typography.Text>
        </Space>
      </Header>
      <Content style={{ padding: 24, background: '#f5f5f5' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}
