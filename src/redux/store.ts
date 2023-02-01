import { configureStore } from '@reduxjs/toolkit'
import { authSlice, chatSlice, friendSlice } from './features'
import { usersApi, chatApi } from '@/services';

export interface AppStore {
}


const store= configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
    chat: chatSlice.reducer,
    friend: friendSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, chatApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store