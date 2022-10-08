import { createAsyncThunk } from '@reduxjs/toolkit'
import { saveState, loadState } from '@/helpers/localStorage'

import {
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth'

import { getStorage, ref, uploadBytes } from 'firebase/storage'
import {
  collection,
  doc,
  where,
  writeBatch,
  query,
  setDoc,
  onSnapshot,
  updateDoc
} from 'firebase/firestore'

import { auth, db } from '@/config/firebase'
import { User } from '@/models'

export const singUpUser = createAsyncThunk('user/register', async (user: User, thunkApi) => {  
  try {
    const { username, email, password } = user
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const userRes = res.user

    // UPDATE USER'S DISPLAYNAME 
    const collectionRef = collection(db, 'users')
    await updateProfile(userRes, { displayName: username })

    // ADD USERS COLLECTION
    const newUser = {
        id: userRes.uid,
        username,
        email,
        isOnline: false
      }

      const docRef = doc(collectionRef, userRes.uid)
      await setDoc(docRef, newUser)

    return 'succeeded'
  } catch (err) {
    console.error(err)
  }

})

export const setUserProfilePhoto = createAsyncThunk('user/setUserProfile', async (file: any, thunkApi) => {
  try {
    const storage = getStorage()
    const imgRef = ref(storage, `images\${uid}`)
    const resUpload = await uploadBytes(imgRef, file)
    return resUpload
  } catch (error) {
    console.error(error)
  }
})

export const signInUser = createAsyncThunk('user/signIn', async (usertoCreate: User, thunkApi) => {  
  try {
    const { email, password } = usertoCreate
    const { user } = await signInWithEmailAndPassword(auth, email, password)

    // ADD TO LOCALSTORAGE
    const loggedUser = {
      username: user.displayName,
      profileUser: '', 
      email: user.email,
      id: user.uid
    }

    console.log(user, loggedUser)
    saveState('user', loggedUser)

    // UPDATE STATE USER (online)
    const collectionRef = collection(db, 'users')
    const docRef = doc(collectionRef, user.uid)
    await updateDoc(docRef, { isOnline: true })
    return 'succeeded'
  } catch (err) {
    console.error(err)
  }
})

export const logout = createAsyncThunk('user/signOut', async (__, thunkApi) => {
    try {
      await signOut(auth)

      // UPDATE STATE USER (Offline)
      const user = loadState('user')

      const collectionRef = collection(db, 'users')
      const docRef = doc(collectionRef, user.id)
      await updateDoc(docRef, { isOnline: false })

      // REMUEVE DEL LOCALSTORAGE
      localStorage.removeItem('user')
      return 'succeeded'
    } catch (err) {
      console.log(err)
    }
})
