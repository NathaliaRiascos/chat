import styled from 'styled-components'

export const Tabs = styled.div`
  background-color: var(--white);
  // background-color: #ebf1f7;
  align-self: center;
  height: 58px;
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
    background: var(--light-grey);
    color:  var(--primary);
    font-weight: 500;
  }
`