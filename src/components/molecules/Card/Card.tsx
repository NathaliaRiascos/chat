import React from 'react'
import { CardStyled, Body, Footer, Content, Aside, Title } from './Card.styled'
import { Avatar } from '@/components'


interface Props {
  aside?: JSX.Element | JSX.Element[]
  data: {photo?: string, name?: string, message?: string}
  footer?: JSX.Element | JSX.Element[]
}
function Card({data, aside, footer}: Props) {

  return (
    <CardStyled>
      <Body>
        <Avatar src={data?.photo} alt='imagen de usuario' />
        <Content>
          {data?.name && <Title>{data?.name}</Title>}
          { data?.message && 
              <p className='card__paragraph'>
                { data.message }
              </p>
            }
          </Content>
          {aside && <Aside>{ aside }</Aside> }
      </Body>
      { footer && <Footer> { footer } </Footer>}
    </CardStyled>
  )
}

export default Card