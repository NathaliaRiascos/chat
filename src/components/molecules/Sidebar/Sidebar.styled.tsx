import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

// export const Aside = styled.aside`
//     display: flex;
//     flex-direction: column-reverse;
//     height: inherit;
//     justify-content: space-between;
//     list-style: none;
//     justify-self: center;
//     width: 100%;
//     max-width: 500px;


//   & .bar {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background: var(--white);
//     flex-shrink: 0;
//     height: 73px; 
//     border-radius: 20px;
//     max-width: 430px;
//     margin: 20px;
//     box-shadow: 0px 30px 60px rgba(141, 139, 139, 0.2);
//   }

//   & .bar img,& .btn--close {
//     display: none;
//   }


//   @media screen and (${device.desktop}){
//     justify-content: flex-start;
//     justify-self: flex-start;
//     gap: 20px;
//     flex-direction: row;
//     grid-column: span 2;
//     max-width: 530px;

//     & .bar{
//       height: 100%;
//       margin: 0;
//       padding-top: 100px;
//       justify-content: flex-start;
//       gap: 100px;
//       position: relative;
//       width: 80px;
//       border-radius: 0;
//     }

//     & .bar:not(.bar--open) img {
//       display: block;
//     }

//     & .bar--open {
//       width: 10px;
      

//       & > * {
//         display: none;
//       }
//     }

//     & .btn--close {
//       display: block;
//       position: absolute;
//       background-color: var(--primary);
//       border: none;
//       right: -18px;
//       top: 20px;
//       width: 32px;
//       height: 32px;
//       cursor: pointer;
//       color: var(--white);
//       border-radius: 100%;
//     }
// }
// `

export const Aside = styled.aside`
    display: flex;
    flex-direction: column-reverse;
    height: inherit;
    justify-content: space-between;
    list-style: none;
    justify-self: center;
    width: 100%;
    max-width: 430px;


  & .bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--white);
    flex-shrink: 0;
    height: 73px; 
    border-radius: 20px;
    max-width: 430px;
    margin: 20px;
    box-shadow: 0px 30px 60px rgba(141, 139, 139, 0.2);
  }

  & .bar img,& .btn--close {
    display: none;
  }

  @media screen and (${device.desktop}){
    grid-column: 1 / 2;
    display: grid;
    grid-template-columns: auto 1fr;

    max-width: 100%;
    gap: 30px;

    & .bar{
      height: 100%;
      margin: 0;
      grid-column: 1 / 2;
      padding-top: 100px;
      justify-content: flex-start;
      gap: 100px;
      position: relative;
      width: 80px;
      border-radius: 0;
    }

    & .bar:not(.bar--open) img {
      display: block;
    }

    & .bar--open {
      width: 30px;
      

      & > * {
        display: none;
      }
    }

    & .btn--close {
      display: block;
      position: absolute;
      background-color: var(--primary);
      border: none;
      right: -18px;
      top: 20px;
      width: 32px;
      height: 32px;
      cursor: pointer;
      color: var(--white);
      border-radius: 100%;
    }
}
`