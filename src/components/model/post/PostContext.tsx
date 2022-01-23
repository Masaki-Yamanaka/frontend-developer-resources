import { useState, createContext, ReactNode, useEffect } from 'react'
import { fetchPosts } from '@/src/components/api/post'
import { Post } from '@/src/API'

export type IPostContext = {
  posts?: Post[],
  updatePosts: () => Promise<void>
}

const PostContext = createContext<IPostContext | undefined>(undefined)

const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([])

  const updatePosts = async () => {
    const fetchedPosts = await fetchPosts()
    if (!fetchedPosts) return
    setPosts(fetchedPosts)
  }

  useEffect(() => {
    ;(async () => {
      await updatePosts()
    })()
  }, [])

  return (
    <PostContext.Provider
      value={{
        posts: posts,
        updatePosts: updatePosts
      }}
    >
      { children }
    </PostContext.Provider>
  )
}

export { PostContext, PostProvider }