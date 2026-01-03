import { Link } from 'react-router-dom'
import { Button, Space } from 'antd'

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 800 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: 'black', marginBottom: 16 }}>React + Express</h1>

        <Space size="middle">
          <Link to="/login">
            <Button size="large">Sign In</Button>
          </Link>
          <Link to="/register">
            <Button type="primary" size="large" ghost>Get Started</Button>
          </Link>
        </Space>
      </div>
    </div>
  )
}
