import styled from 'styled-components'

export const HeaderStyled  = styled.header`
  display: flex;
  width: 100%;
  background-color: var(--white);
  justify-content: space-between;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--text-xs);
  
  & h2:first-letter {
    text-transform: uppercase;
}
`