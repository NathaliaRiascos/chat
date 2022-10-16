import { useState, useRef, useEffect } from 'react'
import { Section } from './Chat.styled'
import { useAppSelector } from '@/redux/hooks'
import { useAppDispatch } from '@/redux/hooks'
import { setOpen } from '@/redux/features/'

import { Header } from './components'

function Chat() {
  const dispatch = useAppDispatch()
  const chat = useAppSelector(state => state.chat)

  return (
    <Section className={chat.open ? '': 'hidden'}>
      <p>{chat.chatId}</p>
      <button className='btnBack' onClick={() => dispatch(setOpen(false))}>Go Back One</button>
      <Header />
    </Section>
  )
}

export default Chat