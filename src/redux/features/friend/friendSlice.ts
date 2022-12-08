import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'redux/store'
import { User } from '@/models'

import { getFriends } from './thunks'
import { Friend } from '../../../models/user';

interface AuthState { 
  friends: Friend[] | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: AuthState = {
  friends: [],
  status: 'idle'
}

export const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(getFriends.fulfilled, (state, action: PayloadAction<any>) => {
      state.friends = action.payload
    })
    builder.addCase(getFriends.rejected, (state, action: PayloadAction<any>) => {
      state.status = action.payload
    })
  }
})

// export const searchFriendById = (state: RootState, friend Id: string) =>
//   state.friend.friends?.find(friend => friend .id === friend.Id)
