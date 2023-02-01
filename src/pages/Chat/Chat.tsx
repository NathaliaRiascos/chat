import { useState, useRef, useEffect } from 'react'
import { Section } from './Chat.styled'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { Form, Header, Messages } from './components'
import { collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Card } from '@/components'


function Chat() {
  const dispatch = useAppDispatch()
  const chat = useAppSelector(state => state.chat)
  const [ messages, setMessages ] = useState<any[]>()

  useEffect(() => {

    const docRef = collection(db, 'chats', chat.chatSelected.id, 'messages')
    const q = query(docRef, orderBy('createdAt', 'asc'))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todos: any[] = querySnapshot.docs.map(doc => ({id: doc.id,...doc.data()}))
      setMessages(todos)
      
    });
    return () => unsub()
  }, [])

  const transformData = (data: any) => {
    return {
      photo: data?.photoURL,
      name: data.name
    }
  }
  return (
    <Section className={chat.open ? '': 'hidden'}>
      {/* <p>{chat.chatId}</p> */}
      <Header data={transformData(chat.chatSelected)}/>
      {/* { chats?.length? chats.map(chat => <Card data={transformData(chat)} />) : <p>Inicia una conversation</p>} */}
      <Messages messages={messages}/>
      <Form idGroup={chat.chatSelected.id}/>
    </Section>
  )
}

export default Chat