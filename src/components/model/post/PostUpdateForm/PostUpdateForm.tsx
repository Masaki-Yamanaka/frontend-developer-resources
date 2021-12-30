import { useForm, SubmitHandler } from 'react-hook-form'
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'
import { updatePostData } from '@/src/components/api/post'
import { UpdatePostInput } from '@/src/API'
import { IPostFormInput, PostUpdateFormProps } from '@/src/types'

export const PostUpdateForm = ({ post, categories, updateDisplayPosts }: PostUpdateFormProps) => {
  const { currentUser } = useCurrentUser()
  const { register, handleSubmit } = useForm<IPostFormInput>()

  const onSubmit: SubmitHandler<IPostFormInput> = async (data) => {
    if (currentUser && currentUser.getUser) {
      const input: UpdatePostInput = {
        id: post.id,
        title: data.title,
        content: data.content,
        categoryId: data.categoryId,
        userId: currentUser.getUser.id,
      }
      await updatePostData(input)
      await updateDisplayPosts()
    }
  }

  return (
    <section>
      <h1>PostUpdateForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>title</label>
          <input type='text' {...register('title')} defaultValue={post.title} />
        </div>
        <div>
          <label>content</label>
          <input type='textarea' {...register('content')} defaultValue={post.content} />
        </div>
        <div>
          <label>category</label>
          <select {...register('categoryId')} defaultValue={post.category?.id}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <input type='submit' />
      </form>
    </section>
  )
}
