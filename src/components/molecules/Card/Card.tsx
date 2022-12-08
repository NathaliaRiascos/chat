import React from 'react'
import { CardStyled, Body, Footer, Content } from './Card.styled'
import user from '@/assets/user.png'
import { Avatar } from '@/components'


interface Props {
  aside?: JSX.Element | JSX.Element[]
  data: {photo: string, name: string, message: string}
  footer?: JSX.Element | JSX.Element[]
}
function Card({data, aside, footer}: Props) {
  const photo = data?.photo? data : user
  return (
    <CardStyled>
      <Body>
        <Avatar src={photo} alt='imagen de usuario' />
        <Content>
          {data?.name && <h1>{data?.name}</h1>}
          { data?.message && 
              <p className='card__paragraph'>
                { data.message }
              </p>
            }
          </Content>
          { aside }
      </Body>
      { footer && <Footer> { footer } </Footer>}
    </CardStyled>
  )
}

export default Card