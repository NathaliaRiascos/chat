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

export const Button = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 48px;
  background-color: transparent;
  border: none;
  padding: 0;
  border-radius: 15px;
  font-style: medium;
  font-size: inherit;
  cursor: pointer;
  gap: 10px;
  // font-weight: var(--font-weight-regular);

  &.primary {
    background-color: var(--primary);
    color: white;
    width: 100%;
    box-shadow: 0px 30px 60px 0px #8D8B8B33;
    transition: background-color .5s;


    &:hover {
      background-color: var(--blue-dark);
    }
  }

  &.outline {
    border: 2px solid ${({color}) => handleColorType(color)};
    color: ${({color}) => handleColorType(color)};
  }

  &.link {
    color: ${({color}) => handleColorType(color)};
    background-color: transparent;
    height: auto;
  }

  &.position_left {
    flex-direction: row;
  }

  &.position_right {
    flex-direction: row reverse;
  }

  @media (min-width: 800px) {
    header &.link {
      color: var(--white);
    }
  }  

`