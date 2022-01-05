import styles from './Modal.module.scss'

type ModalProps = {
  isOpen: boolean
  closeModal: () => void
}

export const Modal = ({ isOpen, closeModal }: ModalProps) => {
  if (isOpen) {
    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <p>これがモーダルウィンドウです。</p>
          <p>
            <button onClick={closeModal}>close</button>
          </p>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Modal
