import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: inherit;
  width: 100%;
  max-width: 336px;
  text-align: center;

  & .contain__password {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: inherit;
  }
`