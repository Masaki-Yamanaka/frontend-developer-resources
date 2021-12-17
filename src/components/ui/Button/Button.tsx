import style from './Button.module.scss'
import { ButtonProps } from '@/src/types'

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
