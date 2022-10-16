import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Search, Icon  } from '@/components'

function ListUser() {
  return (
    <>
      <Card 
        aside={
          <button className='card__icon'>
            <Icon iconName='user-plus' color='primary'/>
          </button> 
        }
      />
    </>
  )
}

export default ListUser