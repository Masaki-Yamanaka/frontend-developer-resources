import styles from './ResourceCard.module.scss'
import { formatDateToSlash } from '@/src/components/utils/useFormatData'
import { PageLink } from '@/src/components/ui/PageLink'
import { Resource } from '@/src/API'
import { AiFillCheckCircle } from 'react-icons/Ai'
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
        <p className={styles.category}>{resource.category?.name}</p>
        <p className={styles.title}>{resource.title}</p>
        <div className={styles.buttons}>
          <Button className={styles.button} onClick={test}>
            <span className={styles.buttonNavy}>
              <span className={styles.icon}>
                <AiFillCheckCircle size={16} />
              </span>
              <span> CHECK</span>
            </span>
          </Button>
          <PageLink className={styles.buttonPink} href={resource.url} target={true}>
            <span>WATCH</span>
          </PageLink>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.updatedAt}>
          {resource.updatedAt ? formatDateToSlash(resource.updatedAt) : null}
        </p>
      </div>
    </div>
  )
}

export default ResourceCard
