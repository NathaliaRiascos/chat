import { useAppDispatch } from '@/redux/hooks'
import { setChat } from '@/redux/features/'
import { Card, Search, Header, Icon } from '@/components'


function Messages() {
  const dispatch = useAppDispatch()
  return (
    <>
      <div>  
        <Header title='Messages'
        >
          <Icon iconName='message' color='white'/>
      </Header>
        <button onClick={() => dispatch(setChat(1))}>Holi</button>
      </div>
      <Search />
      <Card />
    </>
  )
}

export default Messages