import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const CardStyled = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & .card__icon {
    background-color: transparent;
    outline: transparent;
    border: none;
    cursor: pointer;
  }

  & .card__paragraph {
    // white-space: nowrap;
    // text-overflow: ellipsis;
    // overflow: hidden;
  }


`

export const Footer = styled.div`

`