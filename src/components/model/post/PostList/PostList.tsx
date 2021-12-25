import { useState, useEffect } from 'react'
import { Post } from '@/src/API'
import { fetchAllPosts } from '@/src/components/api/post'
import { NextImage } from '@/src/components/ui/Image'

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    ;(async () => {
      const fetchedPosts = await fetchAllPosts()
      if (!fetchedPosts) return
      setPosts(fetchedPosts)
    })()
  }, [])
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
