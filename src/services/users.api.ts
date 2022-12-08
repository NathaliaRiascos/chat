import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'
import { User } from '@/models/user'
import { db } from '@/config/firebase'
import { loadState } from '@/helpers/localStorage'
import { Friend } from '../models/user'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      async queryFn() {
        try {
          const user = loadState('user')
          console.log(user)
          const userRef = collection(db, 'users')
          const q = query(userRef, where('id', '!=', user.id))
          const querySnapshot = await getDocs(q)
          let users: User[] = []
          querySnapshot?.forEach((doc: any) =>
            users.push({ id: doc.id, ...doc.data() })
          )
          return { data: users }
        } catch (err) {
          return { error: 'ok' }
        }
      },
    }),
    addFriend: builder.mutation<any, string>({
      async queryFn(friend: any) {
        try {
          const user = loadState('user')
          const userRef = doc(db, 'users', friend.id)
          const resRef = await getDoc(userRef)

          // ADD FRIEND TO ME
          const meRef = doc(db, `requests/${user.id}/friends/${friend.id}`)
          await setDoc(meRef, resRef.data())

          // ADD ME TO FRIEND
          const friendRef = doc(db, `requests/${friend.id}/friends/${user.id}`)
          await setDoc(friendRef, user)

          // DELETE REQUEST TO ME
          await deleteDoc(
            doc(db, `requests/${user.id}/friendRequests/${friend.id}`)
          )

          // DELETE REQUEST BY FRIEND
          await updateDoc(doc(db, `requests/${friend.id}/`), {
            ownRequests: arrayRemove(user.id),
          })

          return { data: 'ok' }
        } catch (err) {
          return { error: 'ok' }
        }
      },
    }),
    declineFriend: builder.mutation<any, string>({
      async queryFn(friend: any) {
        try {
          const user = loadState('user')
          const userRef = doc(db, 'users', friend.id)
          const resRef = await getDoc(userRef)

          // DELETE REQUEST TO ME
          await deleteDoc(
            doc(db, `requests/${user.id}/friendRequests/${friend.id}`)
          )

          // DELETE REQUEST BY FRIEND
          await updateDoc(doc(db, `requests/${friend.id}/`), {
            ownRequests: arrayRemove(user.id),
          })

          return { data: 'ok' }
        } catch (err) {
          return { error: 'ok' }
        }
      },
    }),
    sentRequest: builder.mutation<any, string>({
      async queryFn(id: string) {
        try {         
          const user = loadState('user')
          const userRef = doc(db, 'requests', user.id)
          await setDoc(userRef, {
            ownRequests: arrayUnion(id),
          })
          
          // ADD REQUEST BY ME TO OTHER USER
          const meRef = doc(db, `requests/${id}/friendRequests/${user.id}`)
          await setDoc(meRef, {
            id: user.id, 
            photoURL: user?.photoURL,
            username: user.username,
            message: 'Sent a friend request',
          })

          return { data: 'ok' }
        } catch (err) {
          console.log(err)
          return { error: 'ok' }
        }
      },
    }),
  }),
})

export const {
  useGetUsersQuery,
  useAddFriendMutation,
  useSentRequestMutation,
} = usersApi
