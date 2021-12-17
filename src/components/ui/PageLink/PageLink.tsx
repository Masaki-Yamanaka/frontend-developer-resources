import Link from 'next/link'
import style from './PageLink.module.scss'
import { PageLinkProps } from '@/src/types'

export const PageLink = ({ href, children }: PageLinkProps) => {
  return (
    <Link href={href}>
      <a className={style.anchor}>{children}</a>
    </Link>
  )
}

export default PageLink
