import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card, Typography, Alert } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { useAuth } from '../../../lib/auth'

const { Title, Text } = Typography

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (values) => {
    setError('')
    setIsLoading(true)

    try {
      await login(values)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
      <div style={{ width: '100%', maxWidth: 400, padding: 24 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Title level={2} style={{ marginBottom: 4 }}>Welcome back</Title>
          <Text type="secondary">Sign in to your account</Text>
        </div>

        <Card>
          {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 24 }} />}

          <Form layout="vertical" onFinish={handleSubmit} size="large">
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input prefix={<MailOutlined />} placeholder="you@example.com" />
            </Form.Item>

            <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter your password' }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
            </Form.Item>

            <Form.Item style={{ marginBottom: 12 }}>
              <Button type="primary" htmlType="submit" loading={isLoading} block>Sign In</Button>
            </Form.Item>
          </Form>

          <div style={{ textAlign: 'center' }}>
            <Text type="secondary">Don't have an account? <Link to="/register">Sign up</Link></Text>
          </div>
        </Card>
      </div>
    </div>
  )
}
