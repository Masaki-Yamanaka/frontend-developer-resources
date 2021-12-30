import { Button } from '@/src/components/ui/Button'
import { deletePostData } from '@/src/components/api/post'
import { DeletePostInput } from '@/src/API'
import { PostDeleteButtonProps } from '@/src/types'

export const PostDeleteButton = ({ postId, updateDisplayPosts }: PostDeleteButtonProps) => {
  const clickDeleteButton = async (postId: string) => {
    const input: DeletePostInput = {
      id: postId,
    }
    await deletePostData(input)
    await updateDisplayPosts()
  }

  return (
    <>
      <Button onClick={() => clickDeleteButton(postId)}>削除</Button>
    </>
  )
}
