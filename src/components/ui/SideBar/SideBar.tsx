import { ReactNode } from 'react'
import styles from "./SideBar.module.css"

export const SideBar = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sidebar}>サイドバーだよ</section>
        <article className={styles.main}>{children}</article>
      </div>
    </>
  )
}

export default SideBar
