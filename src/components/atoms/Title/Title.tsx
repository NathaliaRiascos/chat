import { FontSize } from '@/models'
import React from 'react'
import { Point, Title } from './Title.styled'


interface Props {
  title: string
  fontSize?: FontSize
}
function TitleComponent({ title, fontSize = '2lg'}: Props) {
  return (
    <Title fontSize={fontSize}>
      <h1>{title}</h1>
      <Point></Point>
    </Title>
  )
}

export default TitleComponent