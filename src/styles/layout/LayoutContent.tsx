import styled from 'styled-components'
import { device } from '@/helpers/breakpoints'

export const LayoutContent = styled.div`
  display: flex;
  gap: 58px;
  margin: 20px;
  flex-direction: column;
  padding-top: 34px;
 
  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & header .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px
  }

  @media screen and (${device.desktop}){
    padding-top: 50px;
    width: 100%;
  }
`