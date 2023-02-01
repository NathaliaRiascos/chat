import React from 'react'
import { Title, Friends, Card, Search } from '@/components'


function AddChat() {

  return (
    <>
      <Title title='Select a friend' fontSize='xl'/>
      <div style={{marginTop: '20px'}}>
        <Search color='light-grey'/>
      </div>
      <Friends />
    </>
  )
}

export default AddChat