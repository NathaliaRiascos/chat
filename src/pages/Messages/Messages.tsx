import { Search, Header } from '@/components';
import { Channels, DirectMessages } from './components'


function Messages() {
  return (
    <>
      <div>  
        <Header title='Messages' />
      </div>
      <Search />

      <Channels />
      <DirectMessages />

      
    </>
  )
}

export default Messages