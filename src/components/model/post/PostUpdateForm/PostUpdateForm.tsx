import { useState } from 'react'
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'
import { updatePostData } from '@/src/components/api/post'
import { Category, UpdatePostInput, Post } from '@/src/API'

export type PostCreateFormProps = {
  post: Post
  categories: Category[]
  updateDisplayPosts: () => Promise<void>
}

// このコンポーネントは仮実装なのでReactHookFormに書き換える
export const PostUpdateForm = ({ post, categories, updateDisplayPosts }: PostCreateFormProps) => {
  const [title, setTitle] = useState<string>(post.title)
  const [content, setContent] = useState<string>(post.content)
  const [categoryId, setCategoryId] = useState<string>(post.category?.id || '')
  const { currentUser } = useCurrentUser()

  const handleClickSubmitButton = async () => {
    if (currentUser && currentUser.getUser) {
      const updatePostInput: UpdatePostInput = {
        id: post.id,
        title: title,
        content: content,
        categoryId: categoryId,
        userId: currentUser.getUser.id,
      }
      await updatePostData(updatePostInput)
      await updateDisplayPosts()
    }
  }

  return (
    <section>
      <h1>PostUpdateForm</h1>
      <p>title</p>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>content</p>
      <input type='textarea' value={content} onChange={(e) => setContent(e.target.value)} />
      <p>category</p>
      <select name='category' value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input type='submit' onClick={handleClickSubmitButton} />
    </section>
  )
}
