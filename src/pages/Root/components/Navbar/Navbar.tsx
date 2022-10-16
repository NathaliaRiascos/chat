import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import { Icon } from '@/components'

import { Nav } from './Navbar.styled'

const CustomLink = ({to, icon, text }) => {

  const isEqual = () => {

    return  useMatch(`/chat/${to}`)? 'primary': 'medium-grey'
  }
  return (
    <li className='item'>   
      <Link to={to} >
        <Icon iconName={icon} color={`${isEqual()}`}/>
      </Link>
    </li>
  )
}


function Navbar() {

  return (
      <Nav>
          <ul>
            <CustomLink to='' icon='comments' text='messages'/>
            {/* <CustomLink to='/' icon='user' text='profile'/> */}
            <CustomLink to='notifications' icon='bell' text='notifications'/>
            <CustomLink to='users' icon='users' text='users'/>
            <CustomLink to='tool' icon='gear' text='tools' />
        </ul>      
      </Nav>
  )
}

export default Navbar