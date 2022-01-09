import Link from 'next/link'
import { PageLinkProps } from '@/src/types'

export const PageLink = ({ className, href, children }: PageLinkProps) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default PageLink
