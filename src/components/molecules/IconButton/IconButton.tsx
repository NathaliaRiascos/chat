import React from 'react'
import { Button, Icon } from '@/components'
import { IconName } from '@fortawesome/fontawesome-svg-core'

type typeBoton = 'button' | 'submit'
type sizeBoton = 'small' | 'large'
type styleElement = 'outline' | 'link' | 'primary'
type itemsPositionBoton = 'left' | 'right'

interface Props {
  type: typeBoton
  icon: IconName
  size?: sizeBoton
  styleButton?: styleElement
  styleIcon?: styleElement
  color?: string
  itemsPosition?: itemsPositionBoton
  children: JSX.Element | JSX.Element[]
}

function IconButton ({ type, styleButton, size, color, icon, styleIcon, itemsPosition , children }: Props): JSX.Element {
  return (
      <Button
      type={type}
      style={styleButton}
      color={color}
      size={size}
      itemsPosition={itemsPosition}
    >
      <Icon styleIcon={styleIcon} color={color} iconName={icon} />
      { children }
    </Button> 
  )
}

export default IconButton