import { ProgressCircle } from '@/src/components/ui/ProgressCircle'
import styles from './SidebarProgressRate.module.scss'
import { GetUserQuery } from '@/src/API'

export const SidebarProgressRate = ({ currentUser }: { currentUser: GetUserQuery['getUser'] }) => {
  if (currentUser) {
    return (
      <section className={styles.container}>
        <p className={styles.title}>{currentUser.name}の進捗率</p>
        <div className={styles.graph}>
          <ProgressCircle progressRate={currentUser.progressRate} />
          <div className={styles.rate}>
            <span className={styles.number}>{currentUser.progressRate}</span>%
          </div>
        </div>
      </section>
    )
  }
  return <></>
}

export default SidebarProgressRate
