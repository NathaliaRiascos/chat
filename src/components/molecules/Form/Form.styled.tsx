import styled, { css } from 'styled-components'

export const Form = styled.form`
  display: flex;
  width: 100%;
  text-align: center;
  
  ${({ dir }) => {
    switch (dir) {
      case "row":
        return css`
          flex-direction: row;
          padding: 10px;
          gap: 10px;
        `;
      default:
        return css`
          flex-direction: column;
          max-width: 336px;
          gap: inherit;
        `;
    }
  }}
;

  & .contain__password {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: inherit;
  }
`