import { ReactNode } from 'react'
import style from './Button.module.scss'

type ButtonProps = {
  onClick: () => void
  children: ReactNode
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
