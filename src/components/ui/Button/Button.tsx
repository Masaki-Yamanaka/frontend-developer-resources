import { ButtonProps } from '@/src/types'

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
