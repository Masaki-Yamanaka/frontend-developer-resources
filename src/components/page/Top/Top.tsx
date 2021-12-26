import style from './Top.module.scss'
import { PostCard } from '@/src/components/model/post/PostCard'
import { PostCreateForm } from '@/src/components/model/post/PostCreateForm'
import { PostUpdateForm } from '@/src/components/model/post/PostUpdateForm'
import { PostDeleteButton } from '@/src/components/model/post/PostDeleteButton'
import { usePost } from '@/src/components/hooks/usePost'

export const Top = () => {
  const { categories, posts, updateDisplayPosts } = usePost()
  return (
    <>
      <article className={style.container}>
        <section className={style.postContainer}>
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
