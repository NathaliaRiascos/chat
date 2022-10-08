import { Login,Register, Home } from '@/pages'
import { ProtectedRoute, SpecialRoute } from '.'

import {
  createBrowserRouter
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <SpecialRoute>
      <Login />
    </SpecialRoute> 
  },
  {
    path: '/register',
    element: <SpecialRoute>
      <Register />
    </SpecialRoute>
  },
  {
    path: '/home',
    element: <ProtectedRoute><Home /></ProtectedRoute>
  },
  {
    path: '*',
    element: <p>There's nothing here: 404!</p>,
  }
])

export default router