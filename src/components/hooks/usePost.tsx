import { useState, useEffect } from 'react'
import { Post, Category } from '@/src/API'
import { fetchPosts } from '@/src/components/api/post'
import { fetchCategories } from '@/src/components/api/category'

export const usePost = () => {
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

  return { posts, setPosts, categories, updateDisplayPosts }
}