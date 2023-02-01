import React from 'react'
import { Title, Friends, Card, Search, Header, IconButton, Modal } from '@/components';
import AddChat from '../AddChat/AddChat';
import { useState, useEffect } from 'react';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { loadState } from '@/helpers/localStorage';
import { db } from '@/config/firebase';
import { setChat } from '@/redux/features/'
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


function DirectMessages() {
  const [ open, setOpen] = useState(false)
  // const { friends } = useAppSelector(state => state.friend)
  const [ groups, setGroups ] = useState<any[]>()
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    const user = loadState('user')
    const userRef = query(collection(db, 'groups'), where("members", "array-contains", user.id))
    onSnapshot(userRef, (querySnapshot) => {
      const todos: any[] = querySnapshot.docs
                          .map((doc) => ({id: doc.id, ...doc.data()}))
      setGroups(todos)
    });
  }, [])

  const transformData = (data: any) => {
    return {
      photo: data.photoURL,
      name: data.name,
      message: data?.recentMessage ? data?.recentMessage : 'Aun no hay mensajes'
    }
  }
  return (
    <div>
       <Header title='Direct Messages' fontSize='lg'>
          <IconButton
            icon='circle-plus'
            colorIcon='primary'
            sizeIcon='base'
            onClick={() => setOpen(!open)}
          />
        </Header>
  
        { groups?.map(group =>
          <div key={group.id} onClick={() => dispatch(setChat(group))}>
            <Card data={transformData(group) } />
          </div>     
        )}
        {open && <Modal
      toggleOpen={() => setOpen(false)}>
        <AddChat />
      </Modal>}
    </div>
  )
}

export default DirectMessages