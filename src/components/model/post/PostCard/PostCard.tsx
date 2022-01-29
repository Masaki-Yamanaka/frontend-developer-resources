import { useState } from 'react'
import { Post } from '@/src/API'
import { NextImage } from '@/src/components/ui/Image'
import { CategoryLabel } from '@/src/components/ui/CategoryLabel'
import { DropDownMenu } from '@/src/components/ui/DropDownMenu'
import styles from './PostCard.module.scss'

export const PostCard = ({ post }: { post: Post }) => {
  const dropDownMenuContents = [
    { label: '編集', value: 'edit' },
    { label: '削除', value: 'delete' },
  ]
  const [selectedMenu, setSelectedMenu] = useState('')
  console.log(selectedMenu)

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <CategoryLabel categoryName={post.category?.name || ''} />
        <h1 className={styles.title}>{post.title}</h1>
        <DropDownMenu contents={dropDownMenuContents} setSelectedMenu={setSelectedMenu} />
      </div>
      <NextImage
        className={styles.thumbnail}
        src='https://placehold.jp/540x220.png'
        alt={`${post.user?.name}_icon`}
        width={600}
        height={220}
      />
      <div className={styles.detail}>
        <NextImage
          className={styles.userIcon}
          src={post.user?.profileImagePath || ''}
          alt={`${post.user?.name}_icon`}
          width={32}
          height={32}
        />
        <p className={styles.userName}>{post.user?.name}</p>
        <p className={styles.updatedAt}>{post.updatedAt}</p>
      </div>
      <div>{post.content}</div>
    </section>
  )
}
