import { configureStore } from '@reduxjs/toolkit'
import { authSlice, chatSlice } from './features'

export interface AppStore {
}


const store= configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
    chat: chatSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store