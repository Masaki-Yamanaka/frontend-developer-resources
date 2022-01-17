import Link from 'next/link'
import { PageLinkProps } from '@/src/types'

export const PageLink = ({ className, href, children, target }: PageLinkProps) => {
  return (
    <Link href={href}>
      <a className={className} target={target ? '_blank' : ''}>
        {children}
      </a>
    </Link>
  )
}
PageLink.defaultProps = {
  target: false,
}
export default PageLink
