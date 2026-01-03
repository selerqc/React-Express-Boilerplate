import { Button as AntButton } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}) {
  const typeMap = {
    primary: 'primary',
    secondary: 'default',
    outline: 'default',
    danger: 'primary',
  }

  const sizeMap = {
    sm: 'small',
    md: 'middle',
    lg: 'large',
  }

  return (
    <AntButton
      type={typeMap[variant]}
      danger={variant === 'danger'}
      ghost={variant === 'outline'}
      size={sizeMap[size]}
      loading={isLoading}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </AntButton>
  )
}
