import { ReactNode } from 'react'

export type User = {
  id: string,
  name: string,
  email: string,
  profileImagePath: string,
  progressRate: number,
  resourcesCount: number,
  posts?: []
  createdAt?: string,
  updatedAt?: string,
}

export type ButtonProps = {
  onClick: () => void | Promise<void>
  children: ReactNode
}

export type PageLinkProps = {
  href: string
  children: ReactNode
}

export type NextImageProps = {
  src: string
  alt: string
  width: number
  height: number
}