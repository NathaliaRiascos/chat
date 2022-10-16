import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Search, Icon } from '@/components'
import { ListUser, Friends } from './components'

import { Tabs, Tab as TabStyled, ContainerIcon } from './Users.styled'

enum Tab {
  friends,
  users
}

function Users() {
  const [toggle, setToggle] = useState(Tab.friends)

  return (
    <>
      <header>
        <h1 className='title'>
          { 
            toggle === Tab.friends
            ? 'Friends'
            : 'Users'
          }
        </h1>
        <ContainerIcon>
          <Icon iconName='user-plus' color='white'/>
        </ContainerIcon>
      </header>

      <Search text={`Search ${toggle === Tab.friends? 'your friends': 'users'}`}/>

      <Tabs>
        <TabStyled
          className={toggle === Tab.friends? 'tab__active' : 'tab' }
          onClick={() => setToggle(0)}
        >Friends</TabStyled>
        <TabStyled
          className={toggle === Tab.users? 'tab__active' : 'tab' }
          onClick={() => setToggle(1)}
        >Users</TabStyled>
      </Tabs>

      { toggle === Tab.friends
        ? <Friends />
        : <ListUser />
      }
    </>
  )
}

export default Users