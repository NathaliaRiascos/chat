import { Icon, IconButton } from '@/components'
import { FontSize } from '@/models'
import React from 'react'
import { ContainerIcon, Title } from './Header.styled'
import {  } from '../IconButton'

interface Props {
  title: string
  fontSize?: FontSize
  onClick: ((ele?: any) => void)
  children: JSX.Element | JSX.Element[]
}
function Header({title, onClick, fontSize = 'base', children}: Props) {
  return (
    <header>
      <Title fontSize={fontSize}>
        { title }
      </Title>
        { children }
    </header>
  )
}

export default Header