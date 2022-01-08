import { ReactNode } from 'react'
import Auth from '@aws-amplify/auth'
import styles from './SideBar.module.scss'
import { PageLink } from '@/src/components/ui/PageLink'
import { Button } from '@/src/components/ui/Button'
import { NextImage } from '@/src/components/ui/Image'
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'

export const SideBar = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useCurrentUser()
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sidebar}>
          {currentUser?.getUser && (
            <div className={styles.userProfile}>
              <NextImage className={styles.userAvatar} src={currentUser.getUser.profileImagePath} width={48} height={48} alt='user_avatar' />
              <p className={styles.userName}>{currentUser.getUser.name}</p>
            </div>
          )}
          <div style={{ padding: 20, textAlign: 'center' }}>
            <p>進捗率: {currentUser?.getUser?.progressRate}%</p>
            <p>完了済みタスク: {currentUser?.getUser?.resourcesCount}個</p>
          </div>
          <div className={styles.linkContainer}>
            <PageLink href='/'>Home</PageLink>
            <PageLink href='/resource'>CheckList</PageLink>
            <PageLink href='/login'>Login</PageLink>
            <Button onClick={() => Auth.signOut()}>LogOut</Button>
          </div>
        </section>
        <article className={styles.main}>{children}</article>
      </div>
    </>
  )
}

export default SideBar
