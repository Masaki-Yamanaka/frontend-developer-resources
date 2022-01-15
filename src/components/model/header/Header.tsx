import styles from './Header.module.scss'
import { Button } from '@/src/components/ui/Button'
import { NextImage } from '@/src/components/ui/Image'
export const Header = () => {
  const test = () => {
    console.log('test')
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.notification}>
          <NextImage src='/Icons/bell.svg' alt='通知アイコン' width={35} height={35} />
        </div>
        <Button onClick={() => test()} className={styles.button}>
          Tweet
        </Button>
      </div>
    </>
  )
}

export default Header
