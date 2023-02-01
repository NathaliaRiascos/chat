import styled from 'styled-components'
import { handleColorType } from '@/helpers/colors'

export const Form = styled.form`
  text-align: center;
`


export const Input = styled.input`
  width: 100%;
  height: 44px;
  background-color: ${({color}) => handleColorType(color)};
  outline: transparent;
  padding: 20px;
  border: none;
  border-radius: 10px;
  max-width: 430px;

`
