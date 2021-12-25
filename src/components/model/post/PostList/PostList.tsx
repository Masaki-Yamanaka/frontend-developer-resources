import { NextImage } from '@/src/components/ui/Image'
import { Post } from '@/src/API'

export const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <h1>PostList</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.content}</div>
          <NextImage src={post.user?.profileImagePath || ''} alt={`${post.user?.name}_icon`} width={100} height={80} />
          <div>{post.category?.name}</div>
        </div>
      ))}
    </div>
  )
}
