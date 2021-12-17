import { useEffect, useState, createContext } from 'react'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Amplify from 'aws-amplify'
import { fetchAuthUser, createUserInDynamoDB, fetchCurrentUser } from '@/src/components/api'
import { SideBar } from '@/src/components/ui/SideBar'
import { UserInfo } from '@/src/types'
import { GetUserQuery } from '@/src/API'
import config from '../aws-exports'
Amplify.configure(config)

if (typeof window !== 'undefined') {
  const { host } = window.location
  if (config.oauth.redirectSignIn.includes(',')) {
    const filterHost = (url: string) => new URL(url).host === host
    config.oauth.redirectSignIn = config.oauth.redirectSignIn.split(',').filter(filterHost).shift() || ''
    config.oauth.redirectSignOut = config.oauth.redirectSignOut.split(',').filter(filterHost).shift() || ''
  }
}

const AuthContext = createContext<any>({ currentUser: undefined })

function MyApp({ Component, pageProps }: AppProps) {
  const [authUser, setAuthUser] = useState<GetUserQuery | undefined>()

  /**
   * Google認証したユーザー情報をDynamoDBに送信
   */
  useEffect(() => {
    ;(async () => {
      const user = await fetchAuthUser()
      // ログインチェック
      if (user) {
        const userInfo: UserInfo = {
          id: user.attributes.sub,
          name: user.attributes.name,
          email: user.attributes.email,
          profileImagePath: user.attributes.picture,
          progressRate: 0,
          resourcesCount: 0,
        }
        let currentUser = await fetchCurrentUser(userInfo.id)
        // 初回ログイン時
        if (!currentUser) {
          await createUserInDynamoDB(userInfo)
          currentUser = await fetchCurrentUser(userInfo.id)
        }
        setAuthUser(currentUser?.data)
      }
    })()
  }, [])

  return (
    <AuthContext.Provider value={{ authUser: authUser }}>
      <SideBar>
        <Component {...pageProps} />
      </SideBar>
    </AuthContext.Provider>
  )
}
export default MyApp
