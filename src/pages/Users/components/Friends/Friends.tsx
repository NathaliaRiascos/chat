import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Search  } from '@/components'
import { useAppSelector } from '@/redux/hooks';

function Friends() {
  const { friends } = useAppSelector(state => state.friend)

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
      />
      )
      }
    </>
  )
}

export default Friends