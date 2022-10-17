import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components'

import { Requests, Anothers } from './components'
import { data } from '@/helpers/data'

function Notifications() {
  const [ visible, setVisible ] = useState(2)
  const [ showAll, hideAll ] = useState(false)

  const handleVisible = () => { 
    if (!showAll)
      setVisible(data.length - 1)
    else
      setVisible(2)
    hideAll(!showAll)
    
  }
  return (
    <>
      <Requests />
      <Anothers />
      {/* <header>
        <h1 className='title'>Request Friends</h1>
        <button
          className='btn--text'
          onClick={handleVisible}>
          {
            showAll? 'Show less' : 'Show all'
            
          }
        </button>
      </header>

      { 
        data.slice(0, visible).map(ele => <Card data={ele} />)
      } */}
    </>
  )
}

export default Notifications