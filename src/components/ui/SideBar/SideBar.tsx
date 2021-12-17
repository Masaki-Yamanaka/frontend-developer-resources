import { ReactNode } from 'react'
import styles from "./SideBar.module.scss"
import { PageLink } from "@/src/components/ui/PageLink"

export const SideBar = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sidebar}>
          <div>詳細はプロフに</div>
          <div>進捗率のやつ</div>
          <div className={styles.linkContainer}>
            <PageLink href="/">Home</PageLink>
            <PageLink href="/ssg-demo">CheckList</PageLink>
          </div>
        </section>
        <article className={styles.main}>{children}</article>
      </div>
    </>
  )
}

export default SideBar
