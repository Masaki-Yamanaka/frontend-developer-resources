import { NextImage } from '@/src/components/ui/Image'
import { Post } from '@/src/API'
import styles from './PostCard.module.scss'

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <section className={styles.container}>
      <h1>Post</h1>
      <div>{post.title}</div>
      <div>{post.content}</div>
      <NextImage
        className={styles.image}
        src={post.user?.profileImagePath || ''}
        alt={`${post.user?.name}_icon`}
        width={100}
        height={80}
      />
      <div>{post.category?.name}</div>
    </section>
  )
}
