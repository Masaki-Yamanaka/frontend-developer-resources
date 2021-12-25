import { useState, useEffect } from 'react'
import { Post, Category } from '@/src/API'
import { fetchPosts } from '@/src/components/api/post'
import { fetchCategories } from '@/src/components/api/category'
import { NextImage } from '@/src/components/ui/Image'
import { PostCreateForm } from '@/src/components/model/post/PostCreateForm'

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const updateDisplayPosts = async () => {
    const fetchedPosts = await fetchPosts()
    if (!fetchedPosts) return
    setPosts(fetchedPosts)
  }

  useEffect(() => {
    ;(async () => {
      await updateDisplayPosts()
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const fetchedCategories = await fetchCategories()
      if (!fetchedCategories) return
      setCategories(fetchedCategories)
    })()
  }, [])

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
