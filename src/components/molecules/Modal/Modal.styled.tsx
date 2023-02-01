import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 450px) {
    padding: 20px;
  }
`
export const Modal = styled.div`
  max-width: 350px;
  width: 100%;
  min-height: 100px;
  background-color: var(--white);
  position: relative;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 30px 60px rgba(141, 139, 139, 0.2);
}
`

export const Header = styled.div`
  display: flex;
  max-width: 80%;
  justify-content: space-between;
  // align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
`

export const BtnClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: .3s ease all;
  background-color: transparent;
  border: none;

  &.icon {
    width: auto;
    height: auto;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 313px;
  margin-top: 20px;
  padding: 0 10px;

  & img {
    width: 100%;
    height: 100%;
  }
`