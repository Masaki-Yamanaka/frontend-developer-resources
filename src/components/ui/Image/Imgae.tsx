import Image from 'next/image'
import { NextImageProps } from '@/src/types'

export const NextImage = ({ className, src, alt, width, height }: NextImageProps) => {
  return <Image className={className} src={src} alt={alt} width={width} height={height} />
}

export default NextImage
