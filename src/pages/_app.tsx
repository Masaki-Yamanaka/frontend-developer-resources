import '@/styles/globals.scss'
import '@/styles/select.scss'
import type { AppProps } from 'next/app'
import Amplify from 'aws-amplify'
import { AuthProvider } from '@/src/components/model/auth'
import { ResourceCountProvider } from '@/src/components/model/resource/ResourceCount'
import { PostProvider } from '@/src/components/model/post/PostContext'

import config from '../aws-exports'

Amplify.configure(config)

if (typeof window !== 'undefined') {
  const { host } = window.location
  if (config.oauth.redirectSignIn.includes(',')) {
    const filterHost = (url: string) => new URL(url).host === host
    config.oauth.redirectSignIn =
      config.oauth.redirectSignIn.split(',').filter(filterHost).shift() || ''
    config.oauth.redirectSignOut =
      config.oauth.redirectSignOut.split(',').filter(filterHost).shift() || ''
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ResourceCountProvider>
        <PostProvider>
          <Component {...pageProps} />
        </PostProvider>
      </ResourceCountProvider>
    </AuthProvider>
  )
}
export default MyApp
