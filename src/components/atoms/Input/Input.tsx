import { ChangeEvent } from 'react'
import { Input } from './Input.styled'

interface Props {
  value?: string | number
  name?: string
  styles?: string
  type: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function InputComponent ({ value, name, styles, type, placeholder, onChange }: Props): JSX.Element {
  return (
    <Input
      value={value}
      name={name}
      className={styles}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default InputComponent