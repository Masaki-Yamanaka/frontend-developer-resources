import { useState, useEffect, createContext, ReactNode } from 'react'
import { fetchAuthUser, createUserInDynamoDB, fetchCurrentUser } from '@/src/components/api'
import { User } from '@/src/types'
import { GetUserQuery } from '@/src/API'

type IAuthContext = {
  currentUser?: GetUserQuery
  updateCurrentUser: (data: any) => void
}

// 初期値を作成するが、eslintに引っかかるのでeslint-disableにしてます
// eslint-disable-next-line @typescript-eslint/no-empty-function
const AuthContext = createContext<IAuthContext>({ currentUser: undefined, updateCurrentUser: () => {} })

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<GetUserQuery | undefined>()
  useEffect(() => {
    ;(async () => {
      if (currentUser) {
        return
      }
      const user = await fetchAuthUser()
      // ログインしているか
      if (user) {
        const userInfo: User = {
          id: user.attributes.sub,
          name: user.attributes.name,
          email: user.attributes.email,
          profileImagePath: user.attributes.picture,
          progressRate: 0,
          resourcesCount: 0,
        }

        let authUser = await fetchCurrentUser(userInfo.id)
        // 初回ログインか
        if (!authUser?.data?.getUser) {
          await createUserInDynamoDB(userInfo)
          authUser = await fetchCurrentUser(userInfo.id)
        }
        setCurrentUser(authUser?.data)
        return
      }
      // TODO: ここにリダイレクト処理を入れたい
    })()
  }, [currentUser])

  const updateCurrentUser = (data: GetUserQuery): void => {
    if (!currentUser?.getUser) return
    setCurrentUser({ ...currentUser, getUser: { ...currentUser?.getUser, ...data } })
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        updateCurrentUser: updateCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
