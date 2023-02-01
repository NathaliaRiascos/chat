import React from 'react'
import { Card } from '@/components';
import { loadState } from '@/helpers/localStorage';
import { Container } from './Messages.styled'
import { Message } from '../../components';

function Messages({ messages }) {
  const user = loadState('user')

  const transformData = (data: any) => {
    return {
      photo: data?.photoURL,
      name: data?.username,
      message: data?.message
    }
  }

  return (
    <Container>
    { messages?.length? 
      messages.map(msg => 
        <Message
          key={msg?.id}
          data={transformData(msg)}
          direction={msg?.sentBy?.id == user.id? 'reverse' : 'row'}
        />
        ) 
        : <p>Inicia una conversation</p>}
    </Container>
  )
}

export default Messages