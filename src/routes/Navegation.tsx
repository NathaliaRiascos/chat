import { Login,Register } from '@/pages'
import {
  createBrowserRouter
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello</h1>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }
])


export default router