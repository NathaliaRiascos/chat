import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Search, Icon } from '@/components'
import { useGetUsersQuery, useGetRequestsByMeQuery, useSentRequestMutation } from '@/services'
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import { onSnapshot, collection, doc } from 'firebase/firestore';
import { loadState } from '@/helpers/localStorage';
import { db } from '@/config/firebase';

function ListUser() {
  const { data, isLoading } = useGetUsersQuery()
  const [requests, setRequests] = useState<any[]>()
  const [sentRequest] = useSentRequestMutation()
  const { friends } = useAppSelector(state => state.friend)

  useEffect(() => {
    const user = loadState('user')
    const userRef = doc(db, 'requests', user.id)
    onSnapshot(userRef, (doc) => {
      setRequests(doc.data()?.ownRequests)
      // const todos: any[] = querySnapshot.docs.map((doc) => doc.data());  
      // setRequests(todos)
    });
  }, [])

  const existRequest = (id: string) => {
    const request = requests && requests.find(req => req === id)
    return request
  }

  const isMyFriend = (id: string) => {
    const friend = friends && friends.find(friend => friend.id == id)
    return friend
  }

  const transformData = (data: any) => {
    return {
      photo: data.photoURL,
      name: data.username,
      message: data.about
    }
  }
  if (isLoading)
    return <p>Oops aún no hay usuarios</p>

  return (
    <>
      {data.map(user =>
        <Card
          key={user.id}
          data={transformData(user)}
          aside={
            existRequest(user.id) 
            ? <Icon iconName='paper-plane' color='primary' />
            : !existRequest(user.id) && !isMyFriend(user.id)
              ? <button className='card__icon' onClick={() => sentRequest(user.id)}>
                  <Icon iconName='user-plus' color='primary' />
                </button>
              : null
          }
        />
      )
      }


    </>
  )
}

export default ListUser