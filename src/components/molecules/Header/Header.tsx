import { Icon } from 'components/atoms'
import React from 'react'
import { ContainerIcon } from './Header.styled'

interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
}
function Header({title, children}: Props) {
  return (
    <header>
      <h1 className='title'>
        { title }
      </h1>
      <ContainerIcon>
        { children }
      </ContainerIcon>
    </header>
  )
}

export default Header