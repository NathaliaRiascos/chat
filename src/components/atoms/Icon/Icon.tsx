import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Icon } from './Icon.styled'
import { FontSize } from '@/models'

interface Props {
  iconName: IconName
  color?: string
  size?: FontSize
  styleIcon?: string
}
function IconComponent ({ iconName, size, styleIcon, color }: Props) {
  return (
    <Icon className={styleIcon} color={color} size={size}>
      <FontAwesomeIcon icon={['fas', iconName]}/>
    </Icon>
  )
}

export default IconComponent 