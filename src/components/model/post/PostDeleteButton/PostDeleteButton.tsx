import { Button } from '@/src/components/ui/Button'
import { deletePostData } from '@/src/components/api/post'
import { DeletePostInput } from '@/src/API'

type PostDeleteButtonProps = {
  postId: string
  updateDisplayPosts: () => Promise<void>
}

export const PostDeleteButton = ({ postId, updateDisplayPosts }: PostDeleteButtonProps) => {
  const handleClickDeleteButton = async (postId: string) => {
    const deletePostInput: DeletePostInput = {
      id: postId,
    }
    await deletePostData(deletePostInput)
    await updateDisplayPosts()
  }

  return (
    <>
      <Button onClick={() => handleClickDeleteButton(postId)}>削除</Button>
    </>
  )
}
