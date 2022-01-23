import style from './Top.module.scss'
import { PostCard } from '@/src/components/model/post/PostCard'
import { usePost } from '@/src/components/hooks/usePost'

export const Top = () => {
  const { context } = usePost()
  return (
    <>
      <article className={style.container}>
        <section className={style.postContainer}>
          {context.posts?.map((post) => (
            <div key={post.id} className={style.postCard}>
              <PostCard post={post} />
            </div>
          ))}
        </section>
      </article>
    </>
  )
}
