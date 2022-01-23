import styles from './Header.module.scss'
import { Button } from '@/src/components/ui/Button'
import { NextImage } from '@/src/components/ui/Image'
import { Modal } from '@/src/components/ui/Modal'
import { PostCreateForm } from '@/src/components/model/post/PostCreateForm'
import { usePost } from '@/src/components/hooks/usePost'
import { useModal } from '@/src/components/hooks/useModal'

export const Header = () => {
  const { categories, context } = usePost()
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.notification}>
          <NextImage src='/Icons/bell.svg' alt='通知アイコン' width={35} height={35} />
        </div>
        <Button onClick={openModal} className={styles.button}>
          POST
        </Button>
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <PostCreateForm categories={categories} updateDisplayPosts={context.updatePosts} />
        </Modal>
      </div>
    </>
  )
}

export default Header
