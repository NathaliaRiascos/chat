import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Card, Search, Icon, Header, Modal, Friends, IconButton } from '@/components';
import { ListUser, AddFriend } from './components'

import { Tabs, Tab as TabStyled } from './Users.styled'
import { getFriends } from '@/redux/features'
import { useAppDispatch } from '@/redux/hooks';

enum Tab {
  friends,
  users
}

function Users() {
  const [toggle, setToggle] = useState(Tab.friends)
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  return (
    <>
      <Header
        title={ toggle === Tab.friends? 'Friends' : 'Users'}
      >
        <IconButton
          icon='user-plus'
          styleButton='full'
          onClick={() => setOpen(!open)}
          colorIcon='white'
        />
      </Header>

      <Search text={`Search ${toggle === Tab.friends ? 'your friends' : 'users'}`} />

      <Tabs>
        <TabStyled
          className={toggle === Tab.friends ? 'tab__active' : 'tab'}
          onClick={() => setToggle(0)}
        >Friends</TabStyled>
        <TabStyled
          className={toggle === Tab.users ? 'tab__active' : 'tab'}
          onClick={() => setToggle(1)}
        >Users</TabStyled>
      </Tabs>

      {toggle === Tab.friends
        ? <Friends />
        : <ListUser />
      }

      {open && <Modal toggleOpen={() => setOpen(false)}>
        <AddFriend />
      </Modal>}
    </>
  )
}

export default Users