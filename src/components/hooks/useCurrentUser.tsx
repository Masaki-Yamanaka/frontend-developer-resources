import { useContext } from 'react'
import { AuthContext } from '@/src/components/model/auth'

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext)
  return { currentUser }
}
