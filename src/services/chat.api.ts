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
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore'
import { User } from '@/models/user'
import { db } from '@/config/firebase'
import { loadState } from '@/helpers/localStorage'
import { Friend } from '../models/user'

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    createGroup: builder.mutation<any, string>({
      async queryFn(user: any) {
        try {

          // GET GROUP

          const userLocal = loadState('user')
          const groupId = user.id + userLocal.id
          const docRef  = doc(db, "groups", groupId)
          const docSnap = await getDoc(docRef);

          if (!docSnap.exists()){

            // ADD GROUP
            await setDoc(docRef, {
              members: [user.id, userLocal.id],
              name: user.username,
              type: 'private'
            })

          }
          return { data: groupId}
        } catch (err) {
          return { error: 'ok' }
        }
      }
    }),
    createChat: builder.mutation<any, string>({
      async queryFn(data: any) {
        try {
          
          // GET GROUP
          const user = loadState('user')
          let docRef: any  = doc(db, 'chats', data.idGroup)
          const docSnap = await getDoc(docRef);

          if (!docSnap.exists()){
            // ADD GROUP
            docRef = collection(db, 'chats', data.idGroup, 'messages')
            await addDoc(docRef, {
              sentBy: {
                id: user.id,
                photo: user?.photoURL,
                username: user.username
              },
              createdAt: Timestamp.fromDate(new Date()),
              message: data.message
            })
            console.log(data)

            // UPDATE GROUP
            docRef  = doc(db, "groups", data.idGroup)
            await updateDoc(docRef, {
              recentMessage: data.message
            })
          }
          return { data: 'ok' }
        } catch (err) {
          return { error: err }
        }
      }
    })
  }),
})

export const {
  useCreateGroupMutation,
  useCreateChatMutation
} = chatApi
