import { useState } from 'react'
import styles from './Checkbox.module.scss'
import { Resource } from '@/src/API'
type CheckboxProps = {
  checked: boolean
  handleCheck: (resource: Resource) => void
  resource: Resource
}
export const Checkbox = ({ checked, handleCheck, resource }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked)
  const handleChange = () => {
    setIsChecked(!isChecked)
    handleCheck(resource)
  }

  return (
    <div className={styles.Checkbox}>
      <label className={styles.wrapper}>
        <input
          id='sample1'
          className={styles.input}
          name='sample1'
          type='checkbox'
          checked={checked}
          onChange={handleChange}
        />

        <span className={` ${isChecked ? styles.checked : ''} ${styles.label}`}></span>
      </label>
    </div>
  )
}

export default Checkbox
