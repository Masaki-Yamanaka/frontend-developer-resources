import { useState, useEffect, useContext } from 'react'
import { Category } from '@/src/API'
import { fetchCategories } from '@/src/components/api/category'
import { PostContext } from '@/src/components/model/post/PostContext'

export const usePost = () => {
  const context = useContext(PostContext)
  const [categories, setCategories] = useState<Category[]>([])

  if (context === undefined) {
    throw new Error('PostContext is undefined');
  }

  useEffect(() => {
    (async () => {
      const fetchedCategories = await fetchCategories()
      if (!fetchedCategories) return
      setCategories(fetchedCategories)
    })()
  }, [])

  return { context, categories }
}