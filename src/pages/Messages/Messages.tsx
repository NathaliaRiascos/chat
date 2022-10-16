import { useAppDispatch } from '@/redux/hooks'
import { setChat } from '@/redux/features/'
import { Card, Search  } from '@/components'


function Messages() {
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        Messages
        <button onClick={() => dispatch(setChat(1))}>Holi</button>
      </div>
      <Search />
      <Card />
    </>
  )
}

export default Messages