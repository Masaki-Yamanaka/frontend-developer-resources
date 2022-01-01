import { PostFilterFormProps } from '@/src/types'
import { fetchPosts } from '@/src/components/api/post'

export const PostFilterForm = ({ categories, setPosts }: PostFilterFormProps) => {

  const clickCategory = async (categoryId?: string) => {
    const filteredPosts = await fetchPosts(categoryId)
    if (!filteredPosts) return
    setPosts(filteredPosts)
  }

  return (
    <>
      <h1>PostFilterForm</h1>
      <label>All</label>
      <input type='radio' name='category' onChange={() => clickCategory(undefined)} />
      {categories.map((category) => (
        <div key={category.id}>
          <label>{category.name}</label>
          <input type='radio' name='category' value={category.id} onChange={(e) => clickCategory(e.target.value)} />
        </div>
      ))}
    </>
  )
}
