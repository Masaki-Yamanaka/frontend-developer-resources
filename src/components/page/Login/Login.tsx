import type { NextPage } from 'next'
import Auth from '@aws-amplify/auth'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types'

export const Login: NextPage = () => {
  return (
    <div>
      <button
        onClick={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          })
        }
      >
        Sign in with Google
      </button>
    </div>
  )
}
