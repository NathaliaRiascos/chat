import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadState } from '@/helpers/localStorage';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';

export const getFriends = createAsyncThunk('friend/getFriends', async (_, thunkApi) => {  
  try {
    const user = loadState('user')
    const userRef = collection(db, 'requests', user.id, 'friends')
    const querySnapshot = await getDocs(userRef)
    let users: any[] = []
    querySnapshot?.forEach((doc: any) => 
    users.push({id:doc.id, ...doc.data()}))

    return users
  } catch (err) {
    console.error(err)
  }

})
