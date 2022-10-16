import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const Aside = styled.aside`
    display: flex;
    flex-direction: column-reverse;
    height: inherit;
    justify-content: space-between;
    list-style: none;
    justify-self: center;
    width: 100%;
    max-width: 500px;


  & .bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--white);
    flex-shrink: 0;
    height: 73px; 
    border-radius: 20px;
    margin: 20px;
    box-shadow: 0px 30px 60px rgba(141, 139, 139, 0.2);
  }

  & .bar img {
    display: none;
  }
  @media screen and (${device.desktop}){
    justify-content: flex-start;
    justify-self: flex-start;
    gap: 20px;
    flex-direction: row;
    grid-column: span 2;


    & .bar{
      height: 100%;
      margin: 0;
      padding-top: 100px;
      justify-content: flex-start;
      gap: 100px;
      width: 80px;
      border-radius: 0;  
    }

    
  & .bar img {
    display: block;
  }
}
`