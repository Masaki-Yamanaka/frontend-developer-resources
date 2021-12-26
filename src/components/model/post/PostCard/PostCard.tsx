import { NextImage } from '@/src/components/ui/Image'
import { Post } from '@/src/API'

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <section>
      <h1>Post</h1>
      <div>{post.title}</div>
      <div>{post.content}</div>
      <NextImage src={post.user?.profileImagePath || ''} alt={`${post.user?.name}_icon`} width={100} height={80} />
      <div>{post.category?.name}</div>
    </section>
  )
}
