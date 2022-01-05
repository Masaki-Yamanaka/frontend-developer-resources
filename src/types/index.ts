import { ReactNode, Dispatch, SetStateAction } from 'react'
import { UpdateResourceInput, Category, Post } from '@/src/API'

export type User = {
  id: string
  name: string
  email: string
  profileImagePath: string
  progressRate: number
  resourcesCount: number
  posts?: []
  createdAt?: string
  updatedAt?: string
}

export type ButtonProps = {
  onClick: () => void | Promise<void>
  children: ReactNode
  className?: string
}

export type PageLinkProps = {
  href: string
  children: ReactNode
}

export type Resource = {
  id: string
  categoryId: string
  userId: string
  title: string
  url: string
  createdAt: string
  updatedAt: string
}
export type CategoryType = {
  id: string
  name: string
}
export type BaseModal = {
  title: string
  isOpen: boolean
  closeModal: () => void
  child: ReactNode
}

export type ResourceFormType = {
  type: string
  categories: CategoryType[] | undefined
  closeModal: () => void
  setNewData: (resource: Resource) => Promise<void>
  defaultData: UpdateResourceInput | undefined
}

export type Checked = {
  checked: number
}

export type ResourceFromSpreadsheet = {
  title: string
  category: string
  url: string
}

export type NextImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

export type PostCreateFormProps = {
  categories: Category[]
  updateDisplayPosts: () => Promise<void>
}

export type PostFormInput = 'title' | 'content' | 'categoryId'

export type IPostFormInput = {
  [key in PostFormInput]: string
}

export type PostUpdateFormProps = {
  post: Post
  categories: Category[]
  updateDisplayPosts: () => Promise<void>
}

export type PostDeleteButtonProps = {
  postId: string
  updateDisplayPosts: () => Promise<void>
}

export type PostFilterFormProps = {
  categories: Category[]
  setPosts: Dispatch<SetStateAction<Post[]>>
}

export type ModalProps = {
  isOpen: boolean
  closeModal: () => void
  children: ReactNode
}
