import styled from 'styled-components'

export const Input = styled.input`
  background-color: var(--light-grey);
  border-radius: 15px;
  border: none;
  padding: 10px 20px;
  width: 100%;
  height: 44px;
  max-height: 70px;
  font-size: inherit;

  &::placeholder {
    color: var(--primary);
  }
`