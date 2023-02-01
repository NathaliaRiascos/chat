import React from 'react'
import { CardStyled, Body, Footer, Content, MessageStyled, Title } from './Message.styled'
import { Avatar } from '@/components';
import user from '@/assets/user.png'


interface Props {
  aside?: JSX.Element | JSX.Element[]
  direction?: 'row' | 'reverse'
  data: {photo?: string, name?: string, message?: string}
  footer?: JSX.Element | JSX.Element[]
}

function Message({ data, direction =  'row', footer }: Props) {
  const photo = data?.photo? data : user

  return (
      <CardStyled dir={direction}>
        <Body dir={direction}>
          <Avatar src={photo} alt='imagen de usuario' />
          <Content>
            <Title>{data?.name}</Title>
            <MessageStyled dir={direction}>{ data.message } </MessageStyled>
            </Content>
        </Body>
        {/* <Footer> { footer } </Footer> */}
      </CardStyled>
  )
}

export default Message