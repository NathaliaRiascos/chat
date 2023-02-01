import React from 'react'
import { Form } from './Form.styled'

type typeChildren = JSX.Element | JSX.Element[]
type typeDirection = 'row' | 'column'

interface Props {
  direction: typeDirection
  children: typeChildren,
  onSubmit?: (e: React.FormEvent) => void
}

function FormComponent ({ direction = 'column', children, onSubmit }: Props): JSX.Element {
  return (
    <Form onSubmit={onSubmit} dir={direction}>
      { children }
    </Form>
  )
}

export default FormComponent