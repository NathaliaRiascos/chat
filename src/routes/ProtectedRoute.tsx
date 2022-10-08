import { Navigate } from 'react-router-dom'
import { loadState } from '@/helpers/localStorage'

export const ProtectedRoute = ({ children }) => {
  const auth = loadState('user')
  return  auth
    ? children
    : <Navigate to='/' />
}
