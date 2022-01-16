import styles from './ResourceCard.module.scss'
// import { formatDateToSlashWithTime } from '@/src/components/utils/useFormatData'
import { PageLink } from '@/src/components/ui/PageLink'
import { Resource } from '@/src/API'
import { useResource } from '@/src/components/model/resource'
import { AiOutlinePlus, AiOutlineMore, AiFillCheckCircle } from 'react-icons/Ai'
import { ResourceTableProps } from '@/src/types'
import { Checkbox } from '@/src/components/ui/Checkbox'
import { Button } from '@/src/components/ui/Button'
type ResourceCardProps = {
  resource: Resource
}
export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const test = () => {
    console.log('test')
  }
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <p className={styles.category}>Animation</p>
        <p className={styles.title}>タイトルaaaaaaaaaaaaaaaaa</p>
        <div className={styles.buttons}>
          <Button className={styles.button} onClick={test}>
            <span className={styles.buttonLabel}>CHECK</span>
          </Button>
          <Button className={styles.buttonPink} onClick={test}>
            <span className={styles.linkName}>WATCH</span>
          </Button>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.updatedAt}>2021/11/1</p>
      </div>
    </div>
  )
}

export default ResourceCard
