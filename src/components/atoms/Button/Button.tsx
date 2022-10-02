import React, { MouseEvent } from 'react'
import { Button } from './Button.styled'

type typeBoton = 'button' | 'submit'
type sizeBoton = 'small' | 'large'
type styleBoton = 'outline' | 'link' | 'primary'
type itemsPositionBoton = 'left' | 'right'

interface Props {
  type: typeBoton
  style?: styleBoton
  size?: sizeBoton
  color?: string
  itemsPosition?: itemsPositionBoton
  onClick?:
  | ((e?: React.FormEvent | MouseEvent<HTMLButtonElement>) => void)
  | undefined
  children: JSX.Element | JSX.Element[]
}

function ButtonComponent ({ type, size , style, color, itemsPosition = 'left', onClick, children }: Props): JSX.Element {
  return (
    <Button
      className={`
        ${style} ${size}
        position__${itemsPosition}
      `}
      color={color}
      type={type}
      onClick={onClick}
    >
      { children }
    </Button>
  )
}

export default ButtonComponent