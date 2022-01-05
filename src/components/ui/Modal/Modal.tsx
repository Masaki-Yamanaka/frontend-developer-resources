import { IconContext } from 'react-icons'
import { AiOutlineClose } from 'react-icons/Ai'
import { Button } from '@/src/components/ui/Button'
import { ModalProps } from '@/src/types'
import styles from './Modal.module.scss'

export const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  if (isOpen) {
    return (
      <div className={styles.overlay} onMouseDown={closeModal}>
        <div className={styles.container} onMouseDown={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <IconContext.Provider value={{ size: '24px' }}>
              <Button className={styles.closeButton} onClick={closeModal}>
                <AiOutlineClose />
              </Button>
            </IconContext.Provider>
          </div>
          <div className={styles.content}>{children}</div>
          <div className={styles.footer}></div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Modal
