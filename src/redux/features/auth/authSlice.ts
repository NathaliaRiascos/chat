import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'redux/store'
import { User } from '@/models'

import { singUpUser, signInUser, logout } from './thunks'

interface AuthState { 
  user: User | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: AuthState = {
  user: null,
  status: 'idle'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(singUpUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = action.payload
    })
    builder.addCase(singUpUser.rejected, (state, action: PayloadAction<User>) => {
      state.status = action.payload
    }),
    builder.addCase(signInUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = action.payload
    })
    builder.addCase(signInUser.rejected, (state, action: PayloadAction<User>) => {
      state.status = action.payload
    }),
    builder.addCase(logout.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = action.payload
    })
  }
})