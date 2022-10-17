import { useState } from 'react'
import { Card } from '@/components'

import { data } from '@/helpers/data'


import { useShow } from '../hooks'

function Anothers() {

  const { newData, showAll, handleVisible} = useShow(3, data)

  return (
    <>
      <header>
        <h2 className='title'>Anothers</h2>
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
        newData.map(ele => <Card data={ele} />)
      }
      </section>
    </>
  )
}

export default Anothers