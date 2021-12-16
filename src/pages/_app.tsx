import { useEffect } from 'react'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Amplify from 'aws-amplify'
import { fetchAuthUser, createUserInDynamoDB } from "@/src/components/api"
import { UserInfo } from "@/src/types"
import config from '../aws-exports'
Amplify.configure(config)

if (typeof window !== 'undefined') {
  const { host } = window.location
  if (config.oauth.redirectSignIn.includes(',')) {
    const filterHost = (url: string) => new URL(url).host === host
    config.oauth.redirectSignIn = config.oauth.redirectSignIn.split(',').filter(filterHost).shift()!
    config.oauth.redirectSignOut = config.oauth.redirectSignOut.split(',').filter(filterHost).shift()!
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  // Google認証したユーザー情報をDynamoDBに送信
  useEffect(() => {
    const createUserField = async () => {
      const user = await fetchAuthUser()
      const userInfo: UserInfo = {
        id: user.username,
        name: user.attributes.name,
        email: user.attributes.email,
        profileImagePath: user.attributes.picture,
        progressRate: 0,
        resourcesCount: 0,
      }
      await createUserInDynamoDB(userInfo)
    }
    createUserField()
  }, [])

  return <Component {...pageProps} />
}
export default MyApp
