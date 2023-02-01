import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const Section = styled.section`
  height: inherit;
  position: absolute;
  width: 100%;
  // grid-column: 3 / 5;
  // background-color: var(--light-grey);
  background-color: var(--white);
  grid-template-rows: 70px 1fr 60px;
  display: grid;
  padding: 10px;

  &.hidden {
    display: none;
  }

  @media screen and (${device.tablet}){
      // grid-column: span 3;
      grid-column: 3 / 5;
      width: 100%;
      position: static;
      // display: block !important; 
      // display: flex !important;
      // flex-direction: column;
      .btnBack {
        display: none;
      }
      // box-shadow: 0px 30px 60px rgba(141, 139, 139, 0.2);
      // border-radius: 20px 0px 0px 20px;
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