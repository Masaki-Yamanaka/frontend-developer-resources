import style from './Top.module.scss'
import { PostList } from '@/src/components/model/post/PostList'

export const Top = () => {
  return (
    <>
      <article className={style.container}>
        <section className={style.post}>
          <PostList />
        </section>
        <section className={style.notification}>Notifications</section>
      </article>
    </>
  )
}
