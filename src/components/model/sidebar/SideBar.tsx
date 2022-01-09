import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Auth from '@aws-amplify/auth'
import { IconContext } from 'react-icons'
import { AiOutlineHome, AiOutlineCheckCircle } from 'react-icons/Ai'
import { FiLogOut } from 'react-icons/Fi'
import styles from './SideBar.module.scss'
import { SidebarUserProfile } from './SidebarUserProfile'
import { SidebarProgressRate } from './SidebarProgressRate'
import { PageLink } from '@/src/components/ui/PageLink'
import { Button } from '@/src/components/ui/Button'
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'

export const SideBar = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const location = router.pathname
  const { currentUser } = useCurrentUser()
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sidebar}>
          <SidebarUserProfile currentUser={currentUser?.getUser} />
          <SidebarProgressRate currentUser={currentUser?.getUser} />
          <div className={styles.linkContainer}>
            <IconContext.Provider value={{ size: '24px' }}>
              <PageLink className={`${styles.link} ${location === '/' ? styles.isActive : ''}`} href='/'>
                <AiOutlineHome />
                <span className={styles.linkName}>Home</span>
              </PageLink>
              <PageLink
                className={`${styles.link} ${location === '/resource' ? styles.isActive : ''}`}
                href='/resource'
              >
                <AiOutlineCheckCircle />
                <span className={styles.linkName}>CheckList</span>
              </PageLink>
              <Button className={styles.link} onClick={() => Auth.signOut()}>
                <FiLogOut />
                <span className={styles.linkName}>LogOut</span>
              </Button>
            </IconContext.Provider>
          </div>
        </section>
        <article className={styles.main}>{children}</article>
      </div>
    </>
  )
}

export default SideBar
