import React from 'react'
import { Link } from 'react-router-dom'
import { LinkStyled } from './Link.styled'

interface Props {
  to: string
  color?: string
  children: any
}

function LinkComponent ({ to, color, children }: Props): JSX.Element {
  return (
    <LinkStyled color={color}>
      <Link to={to}>{children}</Link>
    </LinkStyled>  
  )
}

export default LinkComponent 