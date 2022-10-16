import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Icon } from './Icon.styled'

interface Props {
  iconName: IconName
  color?: string
  styleIcon?: string
}
function IconComponent ({ iconName, styleIcon, color }: Props) {
  return (
    <Icon className={styleIcon} color={color}>
      <FontAwesomeIcon icon={['fas', iconName]}/>
    </Icon>
  )
}

export default IconComponent 