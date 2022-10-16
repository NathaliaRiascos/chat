import React from 'react'
import { Img } from './Avatar.styled'
// import user from '@/assets/user.png'

interface Props {
  src: string
  alt: string
}

function Avatar ({ src, alt }: Props): JSX.Element {
  return (
    <Img src={src} alt={alt}/>
  )
}

export default Avatar 