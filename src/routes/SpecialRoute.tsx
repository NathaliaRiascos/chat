import { Navigate } from 'react-router-dom'
import { loadState } from '@/helpers/localStorage'

export const SpecialRoute = ({ children }) => {
  const auth = loadState('user')
  return  !auth
    ? children
    : <Navigate to='/home' />
}
