import { useState } from 'react'
import { Card, Button } from '@/components'

import { data } from '@/helpers/data'

import { useShow } from '../hooks'


function Requests() {
  const { newData, showAll, handleVisible} = useShow(2, data)
  return (
    <>
      <header>
        <h1 className='title'>Request Friends</h1>
        <button
          className='btn--text'
          onClick={handleVisible}>
          {
            showAll? 'Show less' : 'Show all'
            
          }
        </button>
      </header>
      <section className='list--cards'>
      {
        newData.map(ele => 
        <Card 
          data={ele}
          footer={
            <>
              <Button
                type='button'
                size='small'
                style='outline'
                color='primary'
              >Decline</Button>
              <Button
                type='button'
                size='small'
                style='primary'
              >Confirm</Button>
            </>
          }
        />
        )
      }
      </section>
      
    </>
  )
}

export default Requests