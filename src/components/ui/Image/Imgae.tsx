import Image from 'next/image'
import { NextImageProps } from '@/src/types'

export const NextImage = ({ src, alt, width, height }: NextImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} />
}

export default NextImage
