import Image, { ImageProps } from 'next/image'

export const NextImage = ({
  className,
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
}: ImageProps) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
    />
  )
}

export default NextImage
