import { useForm, SubmitHandler } from "react-hook-form";
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'
import { createPostData } from '@/src/components/api/post'
import { Category, CreatePostInput } from '@/src/API'
import style from './PostCreateForm.module.scss'

export type PostCreateFormProps = {
  categories: Category[]
  updateDisplayPosts: () => Promise<void>
}

export type PostFormInput = 'title' | 'content' | 'categoryId'

export type IPostFormInput = {
  [key in PostFormInput]: string
}

// このコンポーネントは仮実装なのでReactHookFormに書き換える
export const PostCreateForm = ({ categories, updateDisplayPosts }: PostCreateFormProps) => {
  const { currentUser } = useCurrentUser()
  const { register, handleSubmit } = useForm<IPostFormInput>();

  const onSubmit: SubmitHandler<IPostFormInput> = async data => {
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
  };

  return (
    <>
      <h1>PostCreateForm</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label>title</label>
        <input type='text' {...register("title")} />
        <label>content</label>
        <input type='textarea' {...register("content")} />
        <label>category</label>
        <select {...register("categoryId")}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input type='submit' />
      </form>
    </>
  )
}
