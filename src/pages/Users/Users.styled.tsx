import styled from 'styled-components'

export const Tabs = styled.div`
  background-color: var(--white);
  align-self: center;
  height: 50px;
  width: 100%;
  max-width: 430px;
  padding: 10px;
  border-radius: 20px;
`
export const Tab = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 10px;
  background-color: inherit;
  border: none;
  outline: transparent;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;

  &.tab__active {
    background: #FAF6FD;
    font-weight: 500;
  }
`