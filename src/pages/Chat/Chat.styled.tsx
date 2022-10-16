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
  @media screen and (${device.desktop}){
    grid-column: span 3;
    width: auto;
    position: static;
    display: block !important; 

    .btnBack {
      display: none;
    }
  }
`