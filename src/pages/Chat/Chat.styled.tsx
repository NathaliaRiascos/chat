import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const Section = styled.section`
  height: inherit;
  // background-color: azure;
  position: absolute;
  // right: -100%;
  width: 100vw;
  background-color: var(--white);
  display: block;

  &.hidden {
    display: none;
  }

  @media screen and (${device.tablet}){
      grid-column: span 3;
      width: auto;
      position: static;
      display: block !important; 
  
      .btnBack {
        display: none;
      }
      box-shadow: 0px 30px 60px rgba(141, 139, 139, 0.2);
      border-radius: 20px 0px 0px 20px;
    }
  // @media screen and (${device.desktop}){
  //   grid-column: span 3;
  //   width: auto;
  //   position: static;
  //   display: block !important;

  //   .btnBack {
  //     display: none;
  //   }
  // }
`