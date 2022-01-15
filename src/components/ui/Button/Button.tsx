import { ButtonProps } from '@/src/types'
import styles from './Button.module.scss'
export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button className={`${className} ${styles.button}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
