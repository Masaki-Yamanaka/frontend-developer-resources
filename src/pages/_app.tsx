import { useEffect } from 'react'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Amplify, { API, graphqlOperation }  from 'aws-amplify'
import Auth from '@aws-amplify/auth'
import config from '../aws-exports'
import { createUser } from "../graphql/mutations"
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
  useEffect(() => {
    const createUserField = async () => {
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        id: user.username,
        name: user.attributes.name,
        email: user.attributes.email,
        profileImagePath: user.attributes.picture,
        progressRate: 0,
        resourcesCount: 0,
      }
      await API.graphql(graphqlOperation(createUser, {input: userInfo}))
      console.log('ユーザーの作成に成功しました');
    }
    createUserField()
  }, [])

  return <Component {...pageProps} />
}
export default MyApp
