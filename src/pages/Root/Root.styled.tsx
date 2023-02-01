import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const Main = styled.main`
  height: 100vh;
  overflow: hidden;
  display: grid;
  gap: 20px;
  // grid-template-columns: repeat(5, 1fr);
  // grid-template-columns: repeat(2, 100vw);
  scroll-behavior: smooth;

  @media screen and (${device.tablet}){
      // grid-template-columns: repeat(5, 1fr);
      align-items: flex-start;
  
     
      justify-items: center;
      width: 100vw;
    }
  @media screen and (${device.desktop}){
  //   grid-template-columns: repeat(5, 1fr);
  //   width: 100vw;
  grid-template-columns: 80px repeat(3, 1fr);
  }
`