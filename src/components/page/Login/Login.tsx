import type { NextPage } from 'next'
import Auth from '@aws-amplify/auth'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types'
import { Button } from '@/src/components/ui/Button'
import { NextImage } from '@/src/components/ui/Image'
import styles from './Login.module.scss'

export const Login: NextPage = () => {
  return (
    <>
      <section className={styles.container}>
        <div
          className={styles.backgroundCircle}
          style={{ top: '5%', left: '25%', width: '200px', height: '200px' }}
        />
        <div
          className={styles.backgroundCircle}
          style={{ top: '10%', left: '60%', width: '300px', height: '300px' }}
        />
        <div
          className={styles.backgroundCircle}
          style={{ top: '70%', left: '20%', width: '300px', height: '300px' }}
        />
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p className={styles.title}>Login</p>
            <p className={styles.subtitle}>ヤマナカ道場へようこそ</p>
          </div>
          <Button
            className={styles.loginButton}
            onClick={() =>
              Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Google,
              })
            }
          >
            <NextImage src='/google_log.svg' alt='google_logo' width={24} height={24} />
            <p className={styles.letter}>Sign in with Google</p>
          </Button>
        </div>
      </section>
    </>
  )
}
