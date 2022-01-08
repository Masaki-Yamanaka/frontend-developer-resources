import { NextImage } from '@/src/components/ui/Image'
import { GetUserQuery } from '@/src/API'
import styles from './SidebarUserProfile.module.scss'

export const SidebarUserProfile = ({ currentUser }: { currentUser: GetUserQuery['getUser'] }) => {
  if (currentUser) {
    return (
      <div className={styles.container}>
        <NextImage
          className={styles.avatar}
          src={currentUser.profileImagePath}
          width={48}
          height={48}
          alt='user_avatar'
        />
        <p className={styles.name}>{currentUser?.name}</p>
      </div>
    )
  }
  return <></>
}

export default SidebarUserProfile