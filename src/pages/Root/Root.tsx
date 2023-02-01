import { Outlet, useMatch  } from 'react-router-dom'
import { Sidebar } from '@/components'
import { Chat } from '@/pages'

import { Main } from './Root.styled'
import { NotChat } from './components'
import { useEffect } from 'react';
import { getFriends } from '@/redux/features'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { LayoutContent } from '../../styles/layout/LayoutContent';

function Root(): JSX.Element {
  const dispatch = useAppDispatch()
  const chatSelected = useAppSelector(state => state.chat.chatSelected)
    useEffect(() => {
    dispatch(getFriends())
   }, [])

  return (
    <Main>
      <Sidebar />
      <LayoutContent>
        <Outlet /> 
      </LayoutContent>
      {chatSelected? <Chat /> : <NotChat />}
    </Main>
  )
}

export default Root