import styled from 'styled-components'

export const LinkStyled = styled.div`
  & a { 
    text-decoration: none;
    color: ${({color}) => color ||  `var(--primary)`};
    font-weight: 600;
  }
`