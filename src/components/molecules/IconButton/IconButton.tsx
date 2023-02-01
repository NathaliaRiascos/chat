import React from 'react'
import { Button, Icon } from '@/components'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontSize } from '@/models';

type typeBoton = 'button' | 'submit'
type sizeBoton = 'small' | 'large'
type styleElement = 'full' | 'outline' | 'link' | 'primary'
type itemsPositionBoton = 'left' | 'right'

interface Props {
  type: typeBoton
  icon: IconName
  size?: sizeBoton
  sizeIcon?: FontSize
  styleButton?: styleElement
  styleIcon?: styleElement
  colorBtn?: string
  colorIcon?: string
  onClick?: () => void
  itemsPosition?: itemsPositionBoton
  children?: JSX.Element | JSX.Element[]
}

function IconButton({ 
  type, 
  styleButton,
  onClick, size,
  sizeIcon,
  colorIcon,
  colorBtn,
  icon,
  styleIcon,
  itemsPosition,
  children 
}: Props): JSX.Element {
  
  return (
    <Button
      type={type}
      style={styleButton}
      color={colorBtn}
      size={size}
      onClick={onClick}
      itemsPosition={itemsPosition}
    >
      <Icon styleIcon={styleIcon} size={sizeIcon} color={colorIcon} iconName={icon} />
      {children}
    </Button>
  )
}

export default IconButton