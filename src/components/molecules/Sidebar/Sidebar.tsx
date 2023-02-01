import { useState } from 'react'
import { Navbar, Avatar, Icon} from '@/components'

import user from '@/assets/user.png'

import { LayoutContent } from '@/styles'
import { Aside } from './Sidebar.styled'
import { Outlet } from 'react-router-dom'

function Sidebar() {
  const [isOpen, setOpen] = useState(true)
  return (
    <Aside>
      <div className={`bar ${isOpen && 'bar--open'}`}>
        <Avatar src={user} alt='imagen de usuario' />
        <Navbar />
        <button
          className='btn--close'
          onClick={() => setOpen(!isOpen)}
        >
          <Icon iconName={`${isOpen? 'arrow-right':'arrow-left'}`}/>
        </button>
      </div>
      {/* <LayoutContent>
        <Outlet /> 
      </LayoutContent> */}
    </Aside>
  )
}

export default Sidebar