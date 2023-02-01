import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Search, Icon, IconButton } from '@/components';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getFriends } from '@/redux/features'
import { useCreateGroupMutation } from '@/services/chat.api';
import { setChat } from '@/redux/features/';


function Friends() {
  const { friends } = useAppSelector(state => state.friend)
  const [createGroup] = useCreateGroupMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  // useEffect(() => {
  //   dispatch(getFriends())
  //  }, [])

  const transformData = (data: any) => {
    return {
      photo: data.photoURL,
      name: data.username,
      message: data.about
    }
  }
  return (
    <>
      { friends.map(user =>
        <Card
            key={user.id}
            data={transformData(user)}
            aside={
              <IconButton icon='message' colorIcon='primary' onClick={() => {
                createGroup(user)
                navigate('/chat')
              }}/>
            }
      />
      )
      }
    </>
  )
}

export default Friends