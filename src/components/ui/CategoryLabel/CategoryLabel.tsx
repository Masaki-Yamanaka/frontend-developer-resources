import styles from './CategoryLabel.module.scss'

export const CategoryLabel = ({ categoryName }: { categoryName: string }) => {
  return <p className={styles.label}>{categoryName}</p>
}
