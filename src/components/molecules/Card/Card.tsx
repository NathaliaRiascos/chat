import React from 'react'
import { CardStyled, Body, Footer } from './Card.styled'
import user from '@/assets/user.png'
import { Avatar } from '@/components'


interface Props {
  aside?: JSX.Element | JSX.Element[]
  children?: JSX.Element | JSX.Element[]
}
function Card({aside, footer}: Props) {
  return (
    <CardStyled>
      <Body>
        <Avatar src={user} alt='imagen de usuario' />
          <p className='card__paragraph'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          { aside }
      </Body>
      <Footer>
        { footer }
      </Footer>
    </CardStyled>
  )
}

export default Card