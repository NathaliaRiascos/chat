import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'redux/store'
import { User } from '@/models'


interface AuthState { 
  chatSelected: { photoURL: string, name: string, id:string} | null,
  open: boolean
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: AuthState = {
  chatSelected: null,
  open: false,
  status: 'idle'
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action ) => {
      
      const { photoURL, name, id } = action.payload
      console.log(action.payload,  photoURL, name, id)
      state.chatSelected = {photoURL, name, id}
      
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