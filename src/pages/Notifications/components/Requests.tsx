import { useEffect, useState } from 'react'
import { Card, Button } from '@/components'

import { useShow } from '../hooks'
import { useGetRequestsToMeQuery,  useAddFriendMutation } from '@/services'
import { loadState } from '@/helpers/localStorage'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../../config/firebase';


function Requests() {
  const [ data, setData ] = useState<any[]>()
  const [ addFriend ] = useAddFriendMutation()
  const { newData, showAll, handleVisible} = useShow(2, data)

  useEffect(() => {
    const user = loadState('user')
    const userRef = collection(db, 'requests', user.id, 'friendRequests')
    onSnapshot(userRef, (querySnapshot) => {
      const todos: any[] = querySnapshot.docs.map((doc) => doc.data());  
      setData(todos)
    });
  }, [])
  

  const transformData = (data: any) => {
    return {
      photo: data.photoURL,
      name: data.username,
      message: data.message
    }
  }
  return (
    <>
      <header>
        <h1 className='title'>Request Friends</h1>
        { data?.length? <button
          className='btn--text'
          onClick={handleVisible}>
          {
            showAll? 'Show less' : 'Show all'      
          }
        </button>
        : null
        }
      </header>
      <section className='list--cards'>
      {
        newData?.length? newData?.map((ele) => <Card
          key={ele.id} 
          data={transformData(ele)}

          footer={
            <>
              <Button
                type='button'
                size='small'
                style='outline'
                color='primary'
              >Decline</Button>
              <Button
                type='button'
                size='small'
                style='primary'
                onClick={() => addFriend(ele)}
              >Confirm</Button>
            </>
          }
        />
        )
        : 'No hay ninguna solicitud'
      }
      {/* : <p>No hay solicitudes</p> */}
      
      </section>
      
    </>
  )
}

export default Requests