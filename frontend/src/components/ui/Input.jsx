import { forwardRef } from 'react'
import { Input as AntInput, Form } from 'antd'

export const Input = forwardRef(({
  label,
  error,
  type = 'text',
  ...props
}, ref) => {
  const InputComponent = type === 'password' ? AntInput.Password : AntInput

  return (
    <Form.Item
      label={label}
      validateStatus={error ? 'error' : undefined}
      help={error}
      style={{ marginBottom: 16 }}
    >
      <InputComponent
        ref={ref}
        type={type === 'password' ? undefined : type}
        size="large"
        {...props}
      />
    </Form.Item>
  )
})

Input.displayName = 'Input'
