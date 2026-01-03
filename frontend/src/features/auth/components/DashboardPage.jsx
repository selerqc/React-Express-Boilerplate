import { Card, Row, Col, Statistic, Button, Typography } from 'antd'
import { ProjectOutlined, CheckCircleOutlined, ClockCircleOutlined, LogoutOutlined } from '@ant-design/icons'
import { useAuth } from '../../../lib/auth'

const { Title, Text } = Typography

export default function DashboardPage() {
  const { user, logout } = useAuth()

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <Card style={{ marginBottom: 24 }}>
        <Title level={3} style={{ marginBottom: 8 }}>Welcome to your Dashboard</Title>
        <Text type="secondary">Hello {user?.name || 'User'}! You're successfully authenticated.</Text>
      </Card>

      <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Active Projects" value={12} prefix={<ProjectOutlined />} valueStyle={{ color: '#1677ff' }} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Tasks Completed" value={48} prefix={<CheckCircleOutlined />} valueStyle={{ color: '#52c41a' }} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Pending Reviews" value={3} prefix={<ClockCircleOutlined />} valueStyle={{ color: '#fa8c16' }} />
          </Card>
        </Col>
      </Row>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button icon={<LogoutOutlined />} onClick={logout}>Sign Out</Button>
      </div>
    </div>
  )
}
