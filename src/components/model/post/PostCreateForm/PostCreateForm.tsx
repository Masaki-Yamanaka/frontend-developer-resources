import { useForm, SubmitHandler } from 'react-hook-form'
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'
import { createPostData } from '@/src/components/api/post'
import { CreatePostInput } from '@/src/API'
import { PostCreateFormProps, IPostFormInput } from '@/src/types'

export const PostCreateForm = ({ categories, updateDisplayPosts }: PostCreateFormProps) => {
  const { currentUser } = useCurrentUser()
  const { register, handleSubmit } = useForm<IPostFormInput>()

  const onSubmit: SubmitHandler<IPostFormInput> = async (data) => {
    if (currentUser && currentUser.getUser) {
      const input: CreatePostInput = {
        title: data.title,
        content: data.content,
        categoryId: data.categoryId,
        userId: currentUser.getUser.id,
      }
      await createPostData(input)
      await updateDisplayPosts()
    }
  }

  return (
    <section>
      <h1>PostCreateForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>title</label>
          <input type='text' {...register('title')} />
        </div>
        <div>
          <label>content</label>
          <input type='textarea' {...register('content')} />
        </div>
        <div>
          <label>category</label>
          <select {...register('categoryId')}>
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
