import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'
import { handleFontSize } from '@/helpers/sizes'

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  h1 {
    font-size: ${({fontSize}) => handleFontSize(fontSize)};
  }

  @media (min-width: 800px) {
    justify-content: flex-start;
  }
`
export const Point  = styled.span`
  background-color: var(--primary);
  border-radius: 100%;
  width: 10px;
  height: 10px;
  align-self: self-end;
`