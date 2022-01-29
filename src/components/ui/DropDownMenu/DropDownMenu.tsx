import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FiMoreHorizontal } from 'react-icons/Fi'
import styles from './DropDownMenu.module.scss'

export const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.dropDownContainer}>
      <IconContext.Provider value={{ size: '24px' }}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FiMoreHorizontal className={styles.dropDownButton} />
        </button>
      </IconContext.Provider>
      {isOpen && (
        <div className={styles.dropDownMenu}>
          <ul>
            <li>
              <button className={styles.dropDownContent}>編集</button>
            </li>
            <li>
              <button className={styles.dropDownContent}>削除</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
