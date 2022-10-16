import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'redux/store'
import { User } from '@/models'


interface AuthState { 
  chatId: number
  open: boolean
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: AuthState = {
  chatId: 0,
  open: false,
  status: 'idle'
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action ) => {
      state.chatId = action.payload
      state.open = true
    },
    setOpen: (state, action ) => {
      state.open = action.payload
    }
  },
  extraReducers(builder) {
  }
})

export const { setChat, setOpen } = chatSlice.actions