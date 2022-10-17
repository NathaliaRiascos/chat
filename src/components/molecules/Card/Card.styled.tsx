import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const CardStyled = styled.div`
  background-color: var(--white);
  padding: 15px;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
  max-width: 430px;

  @media screen and (${device.desktop}){
    max-width: 400px;
  }
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
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }


`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 10px 0;
  padding-top: 15px;
  flex-wrap: wrap;
  border-top: 1.1px solid var(--light-grey);
`