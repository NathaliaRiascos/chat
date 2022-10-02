import React from 'react'
import { Form } from './Form.styled'

type typeChildren = JSX.Element | JSX.Element[]

interface Props {
  children: typeChildren
  onSubmit?: (e: React.FormEvent) => void
}

function FormComponent ({ children, onSubmit }: Props): JSX.Element {
  return (
    <Form onSubmit={onSubmit}>
      { children }
    </Form>
  )
}

export default FormComponent