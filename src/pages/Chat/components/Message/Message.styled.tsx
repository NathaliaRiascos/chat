import styled, { css } from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const CardStyled = styled.div`
  // background-color: var(--white);
  display: flex;
  padding: 15px;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;

  ${({ dir }) => {
    switch (dir) {
      case "reverse":
        return css`
          justify-content: flex-end;
        `;
      default:
        return css`
          justify-content: flex-start;
        `;
    }
  }}

`

export const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${({ dir }) => {
    switch (dir) {
      case "reverse":
        return css`
          flex-direction: row-reverse;
        `;
      default:
        return css`
          flex-direction: row;
        `;
    }
  }}


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

export const Title = styled.h1`
  font-size: var(--text-lg);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 10px;
  justify-content: center;
`
// export const Footer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 20px;
//   margin: 10px 0;
//   padding-top: 15px;
//   flex-wrap: wrap;
//   // border-top: 1.1px solid var(--light-grey);
// `

export const MessageStyled = styled.div`
 
  padding: 10px;
  border-radius: 20px;
  height: 45px;

  ${({ dir }) => {
    switch (dir) {
      case "reverse":
        return css`
          background-color: var(--primary);
          color: #fff;
        `;
      default:
        return css`
          background-color: var(--light-grey);
        `;
    }
  }}
`