import style from './Top.module.scss'
import { PostList } from '@/src/components/model/post/PostList'
import { PostCreateForm } from '@/src/components/model/post/PostCreateForm'
import { usePost } from '@/src/components/hooks/usePost'

export const Top = () => {
  const { categories, posts, updateDisplayPosts } = usePost()
  return (
    <>
      <article className={style.container}>
        <section className={style.post}>
          <PostCreateForm categories={categories} updateDisplayPosts={updateDisplayPosts}/>
          <PostList posts={posts}/>
        </section>
        <section className={style.notification}>Notifications</section>
      </article>
    </>
  )
}
