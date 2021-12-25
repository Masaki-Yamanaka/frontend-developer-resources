import style from './Top.module.scss'

export const Top = () => {
  return (
    <>
      <article className={style.container}>
        <section className={style.post}>Posts</section>
        <section className={style.notification}>Notifications</section>
      </article>
    </>
  )
}
