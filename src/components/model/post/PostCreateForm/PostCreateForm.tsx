import { useState } from 'react'
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'
import { createPostData } from '@/src/components/api/post'
import { Category, CreatePostInput } from '@/src/API'

export type PostCreateFormProps = {
  categories: Category[]
  updateDisplayPosts: () => Promise<void>
}

// このコンポーネントは仮実装なのでReactHookFormに書き換える
export const PostCreateForm = ({ categories, updateDisplayPosts }: PostCreateFormProps) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const { currentUser } = useCurrentUser()

  const handleClickSubmitButton = async () => {
    if (currentUser && currentUser.getUser) {
      const createPostInput: CreatePostInput = {
        title: title,
        content: content,
        categoryId: category,
        userId: currentUser.getUser.id,
      }
      await createPostData(createPostInput)
      await updateDisplayPosts()
    }
  }

  return (
    <>
      <h1>PostCreateForm</h1>
      <p>title</p>
      <input type='text' onChange={(e) => setTitle(e.target.value)} />
      <p>content</p>
      <input type='textarea' onChange={(e) => setContent(e.target.value)} />
      <p>category</p>
      <select name='category' onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input type='submit' onClick={handleClickSubmitButton} />
    </>
  )
}
