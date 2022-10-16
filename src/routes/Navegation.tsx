import {
  Login,
  Register,
  Root,
  Messages,
  Notifications,
  Users,
  Tool
} from '@/pages'
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
    path: '/chat',
    element: <ProtectedRoute><Root /></ProtectedRoute>,
    children: [
      {
        path: '',
        element: <Messages />
      },
      {
        path: 'notifications',
        element: <Notifications />
      },
      {
        path: 'users',
        element: <Users />
      },
      { 
        path: 'tool',
        element: <Tool />
      }
    ]

  },
  {
    path: '*',
    element: <p>There's nothing here: 404!</p>,
  }
])

export default router