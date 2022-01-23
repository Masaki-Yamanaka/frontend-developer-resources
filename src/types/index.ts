import { ReactNode, Dispatch, SetStateAction } from 'react'
import { UpdateResourceInput, Category, Post, Resource } from '@/src/API'
import { SelectChangeEvent } from '@mui/material/Select'

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
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  children: ReactNode
  className?: string
}

export type PageLinkProps = {
  className?: string
  href: string
  children: ReactNode
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

export type ResourceTableProps = {
  openCreateModal: () => void
  resources: Resource[]
}

export type selectItem = {
  value: string
  label: string
}
export type selectProps = {
  handleChange: (event: SelectChangeEvent) => void
  items: selectItem[]
}
