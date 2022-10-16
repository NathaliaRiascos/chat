import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const Nav = styled.div` 
  width: 100%;

& ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-content: center;
  height: inherit;
  align-items: center;

  & .item {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;  
  }

  & .item span {
    font-size: 12px;
  }
}

@media screen and (${device.desktop}){

  & ul {
    flex-direction: column;
    gap: 50px;
  }
}
`