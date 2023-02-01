import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const LayoutContent = styled.div`
  display: flex;
  gap: 58px;
  margin: 20px;
  flex-direction: column;
  padding-top: 34px;
  grid-column: 1 / 2;
  overflow-y: auto;
  // max-width: 430px;
  max-width: 410px;
 
  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 430px;
  }
  & header .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px
  }

  & header .btn--text {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: var(--primary);
    cursor: pointer;
  }

  & .list--cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

//   @media (min-width: 375px){
//     overflow-y: auto;
//     padding-top: 50px;
//     width: 100%;
    
//     overflow-y: auto;
//     padding-right: 30px;

// }


  // @media screen and (${device.tablet}){
  //   padding: 30px;
    // max-width: 400px;
    width: 100%;
    grid-column: 2 / 3;

    max-width: 350px;

  padding-right: 30px;
   margin: 0;
   

   & header {
    max-width: 400px;
  }
  }
`