import { usePost } from '@/src/components/hooks/usePost'
import { NextImage } from '@/src/components/ui/Image'
import { PostCreateForm } from '@/src/components/model/post/PostCreateForm'

export const PostList = () => {
  const { categories, posts, updateDisplayPosts } = usePost()
  return (
    <div>
      <h1>PostList</h1>
      <PostCreateForm categories={categories} updateDisplayPosts={updateDisplayPosts}/>
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
