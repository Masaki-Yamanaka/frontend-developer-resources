import styles from './ProgressBar.module.scss'

export const ProgressBar = ({ progressRate }: { progressRate: number }) => {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.inner} style={{ width: `${progressRate}%` }} />
      </div>
    </>
  )
}
