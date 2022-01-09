import { GetUserQuery } from '@/src/API'
import { ProgressBar } from '@/src/components/ui/ProgressBar'
import { NextImage } from '@/src/components/ui/Image'
import styles from './SidebarProgressRanking.module.scss'

export type SidebarProgressRankingProps = {
  users: GetUserQuery['getUser'][]
}

export const SidebarProgressRanking = ({ users }: SidebarProgressRankingProps) => {
  return (
    <>
      <section className={styles.card}>
        <p className={styles.title}>進捗率ランキング</p>
        {users.map((user, index) => {
          if (user) {
            return (
              <div key={user.id} className={styles.container}>
                <p className={styles.rank}>
                  {index + 1}
                  <span className={styles.fontSm}>位</span>
                </p>
                <div className={styles.imageWrapper}>
                  <NextImage
                    className={styles.userAvatar}
                    src={user.profileImagePath}
                    alt='user_avatar'
                    width={24}
                    height={24}
                  />
                </div>
                <ProgressBar progressRate={user.progressRate} />
                <p>
                  {user.progressRate}
                  <span className={styles.fontSm}>%</span>
                </p>
              </div>
            )
          }
          return <></>
        })}
      </section>
    </>
  )
}
