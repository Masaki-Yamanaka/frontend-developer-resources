import style from './Top.module.scss'
// import { PostFilterForm } from '@/src/components/model/post/PostFilterForm'
import { PostCard } from '@/src/components/model/post/PostCard'
import { PostUpdateForm } from '@/src/components/model/post/PostUpdateForm'
import { PostDeleteButton } from '@/src/components/model/post/PostDeleteButton'
import { usePost } from '@/src/components/hooks/usePost'

export const Top = () => {
  const { categories, context } = usePost()
  return (
    <>
      <article className={style.container}>
        <section className={style.postContainer}>
          {/* <PostFilterForm categories={categories} setPosts={setPosts} /> */}
          {context.posts?.map((post) => (
            <div key={post.id} className={style.postCard}>
              <PostCard post={post} />
              {/* <PostUpdateForm
                post={post}
                categories={categories}
                updateDisplayPosts={context.updatePosts}
              />
              <PostDeleteButton postId={post.id} updateDisplayPosts={context.updatePosts} /> */}
            </div>
          ))}
        </section>
      </article>
    </>
  )
}
