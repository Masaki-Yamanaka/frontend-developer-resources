import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'
Amplify.configure(config)

if (typeof window !== "undefined") {
  const { host } = window.location;
  if (config.oauth.redirectSignIn.includes(',')) {
    const filterHost = (url: string) => new URL(url).host === host;
    config.oauth.redirectSignIn = config.oauth.redirectSignIn
      .split(',')
      .filter(filterHost)
      .shift()!;
    config.oauth.redirectSignOut = config.oauth.redirectSignOut
      .split(',')
      .filter(filterHost)
      .shift()!;
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
