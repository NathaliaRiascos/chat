import React from 'react'
import { Img } from './Avatar.styled'
// import user from '@/assets/user.png'
import user from '@/assets/user.png'

interface Props {
  src: string
  alt: string
}

function Avatar ({ src, alt }: Props): JSX.Element {
  const photo = src || user

  return (
    <Img src={photo} alt={alt}/>
  )
}

export default Avatar 