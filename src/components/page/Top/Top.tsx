import style from './Top.module.scss'
import { PostFilterForm } from '@/src/components/model/post/PostFilterForm'
import { PostCard } from '@/src/components/model/post/PostCard'
import { PostCreateForm } from '@/src/components/model/post/PostCreateForm'
import { PostUpdateForm } from '@/src/components/model/post/PostUpdateForm'
import { PostDeleteButton } from '@/src/components/model/post/PostDeleteButton'
import { Modal } from '@/src/components/ui/Modal'
import { usePost } from '@/src/components/hooks/usePost'
import { useModal } from '@/src/components/hooks/useModal'

export const Top = () => {
  const { categories, posts, setPosts, updateDisplayPosts } = usePost()
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <article className={style.container}>
        <section className={style.postContainer}>
          <h1>モーダル</h1>
          <button onClick={openModal}>ボタン</button>
          <Modal isOpen={isOpen} closeModal={closeModal}>
            test
          </Modal>
          <PostFilterForm categories={categories} setPosts={setPosts} />
          <PostCreateForm categories={categories} updateDisplayPosts={updateDisplayPosts} />
          {posts.map((post) => (
            <div key={post.id} className={style.postCard}>
              <PostCard post={post} />
              <PostUpdateForm post={post} categories={categories} updateDisplayPosts={updateDisplayPosts} />
              <PostDeleteButton postId={post.id} updateDisplayPosts={updateDisplayPosts} />
            </div>
          ))}
        </section>
        <section className={style.notification}>Notifications</section>
      </article>
    </>
  )
}
