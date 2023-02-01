import styled from 'styled-components'
import { handleFontSize } from '@/helpers/sizes'

export const ContainerIcon = styled.button`
  width: 40px;
  height: 36px;
  border: none;
  outline: transparent;
  background: var(--primary);
  cursor: pointer;
  border-radius: 10px;
`

export const Title = styled.h1`
  font-size: ${({fontSize}) => handleFontSize(fontSize)};
`