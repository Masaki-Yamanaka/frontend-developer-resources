import { ReactNode } from 'react'
import Link from 'next/link'
import style from './PageLink.module.scss'

type PageLinkProps = {
  href: string
  children: ReactNode
}

export const PageLink = ({ href, children }: PageLinkProps) => {
  return (
    <Link href={href}>
      <a className={style.anchor}>{children}</a>
    </Link>
  )
}

export default PageLink
