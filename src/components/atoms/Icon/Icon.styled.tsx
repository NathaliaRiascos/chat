import { handleColorType } from '@/helpers/colors'
import { handleFontSize } from '@/helpers/sizes'

import styled from 'styled-components'

export const Icon = styled.div`
  color: ${({ color }) => color? handleColorType(color): 'inherit'};
  font-size: ${({ size }) => size? handleFontSize(size): 'inherit'};

  &.outline {
    background-color: transparent;
    padding: 11px;
    border-radius: 15px;
    border: 2px solid ${({ color }) => color? handleColorType(color): 'inherit'};
    color: ${({ color }) => color? handleColorType(color): 'inherit'};
  }

  @media (min-width: 800px) {
    header &.outline {
      border: 2px solid var(--white);
      color: var(--white);
    }
  } 
`
