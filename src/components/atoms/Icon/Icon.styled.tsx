import styled from 'styled-components'

const handleColorType = (color: string )=> {
  switch (color) {     
    case "white":
      return "var(--white)";
    case "blue":
      return "var(--primary)";
    default:
      return color;
  }
}
export const Icon = styled.div`
  &.outline {
    background-color: transparent;
    padding: 11px;
    border-radius: 15px;
    border: 2px solid ${({color}) => handleColorType(color)};
    color: ${({ color }) => handleColorType(color)};
  }

  @media (min-width: 800px) {
    header &.outline {
      border: 2px solid var(--white);
      color: var(--white);
    }
  } 
`
