import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Card, Search, Icon,Header } from '@/components'
import { ListUser, Friends } from './components'

import { Tabs, Tab as TabStyled } from './Users.styled'
import { getFriends } from '@/redux/features'
import { useAppDispatch } from '@/redux/hooks';

enum Tab {
  friends,
  users
}

function Users() {
  const [toggle, setToggle] = useState(Tab.friends)
  const dispatch = useAppDispatch()

  useEffect(() => {
   dispatch(getFriends())
  }, [])
  
  return (
    <>
      <Header title={ 
        toggle === Tab.friends
            ? 'Friends'
            : 'Users'
          }
        >
          <Icon iconName='user-plus' color='white'/>
      </Header>

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