import { Navbar } from '../../components'
import { Avatar } from '@/components'

import user from '@/assets/user.png'

import { LayoutContent } from '@/styles'
import { Aside } from './Sidebar.styled'
import { Outlet } from 'react-router-dom'

function Sidebar() {
  return (
    <Aside>
      <div className='bar'>
        <Avatar src={user} alt='imagen de usuario' />
        <Navbar />
      </div>
      <LayoutContent>
        <Outlet /> 
      </LayoutContent>
    </Aside>
  )
}

export default Sidebar