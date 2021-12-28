import { ReactNode, useContext } from 'react'
import Auth from '@aws-amplify/auth'
import styles from './SideBar.module.scss'
import { PageLink } from '@/src/components/ui/PageLink'
import { Button } from '@/src/components/ui/Button'
import { AuthContext } from '@/src/components/model/auth'

export const SideBar = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sidebar}>
          <div style={{ padding: 20, textAlign: 'center' }}>
            <p>{currentUser?.getUser?.name}</p>
          </div>
          <div style={{ padding: 20, textAlign: 'center' }}>
            <p>進捗率: {currentUser?.getUser?.progressRate}%</p>
            <p>完了済みタスク: {currentUser?.getUser?.resourcesCount}個</p>
          </div>
          <div className={styles.linkContainer}>
            <PageLink href='/'>Home</PageLink>
            <PageLink href='/resource'>CheckList</PageLink>
            <Button onClick={() => Auth.signOut()}>LogOut</Button>
          </div>
        </section>
        <article className={styles.main}>{children}</article>
      </div>
    </>
  )
}

export default SideBar
