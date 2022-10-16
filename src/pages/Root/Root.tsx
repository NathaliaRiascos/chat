import { Outlet, useMatch  } from 'react-router-dom'
import { Sidebar } from './components'
import { Chat } from '@/pages'

import { Main } from './Root.styled'
import { NotChat } from '@/pages/Chat/components'
function Root(): JSX.Element {

  return (
    <Main>
      <Sidebar />
      <Chat />
    </Main>
  )
}

export default Root