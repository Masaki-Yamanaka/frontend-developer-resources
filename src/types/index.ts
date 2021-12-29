import { ReactNode } from 'react'
import { UpdateResourceInput } from '@/src/API'

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
