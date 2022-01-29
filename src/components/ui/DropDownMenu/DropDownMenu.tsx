import { useState, Dispatch, SetStateAction } from 'react'
import { IconContext } from 'react-icons'
import { FiMoreHorizontal } from 'react-icons/Fi'
import styles from './DropDownMenu.module.scss'

type InputProps = {
  label: string
  value: string | number
}

export type DropDownMenuProps = {
  contents: InputProps[]
  setSelectedMenu: Dispatch<SetStateAction<any>>
}

export const DropDownMenu = ({ contents, setSelectedMenu }: DropDownMenuProps) => {
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
            {contents.map((content, index) => (
              <li key={index}>
                <button
                  className={styles.dropDownContent}
                  onClick={() => setSelectedMenu(content.value)}
                >
                  {content.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
