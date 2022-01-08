import { ReactNode } from 'react'
import Auth from '@aws-amplify/auth'
import styles from './SideBar.module.scss'
import { SidebarUserProfile } from './SidebarUserProfile'
import { PageLink } from '@/src/components/ui/PageLink'
import { Button } from '@/src/components/ui/Button'
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'

export const SideBar = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useCurrentUser()
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sidebar}>
          <SidebarUserProfile currentUser={currentUser?.getUser} />
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
