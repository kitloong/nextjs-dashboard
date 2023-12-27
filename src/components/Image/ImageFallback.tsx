'use client'

import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  src: string;
  fallbackSrc: string;
} & ImageProps

// Source: https://stackoverflow.com/questions/66949606/what-is-the-best-way-to-have-a-fallback-image-in-nextjs
export default function ImageFallback(props: Props) {
  const {
    src,
    fallbackSrc,
    ...rest
  } = props

  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])
  return (
    <Image
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
      alt={rest.alt ?? ''}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
