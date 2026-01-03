import { Spin } from 'antd'

export function Spinner({ size = 'default' }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spin size={size === 'lg' ? 'large' : size === 'sm' ? 'small' : 'default'} />
    </div>
  )
}
