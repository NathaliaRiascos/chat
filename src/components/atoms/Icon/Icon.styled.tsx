import styled from 'styled-components'

const handleColorType = (color: string )=> {
  switch (color) {     
    case 'white':
      return 'var(--white)';
    case 'grey':
      return 'var(--grey)';
    case 'primary':
      return 'var(--primary)';
    case 'light-grey':
      return 'var(--light-grey)';
    case 'dark-white':
      return 'var(--dark-white)';
    case 'medium-grey':
      return 'var(--medium-grey)';
    default:
      return color;
  }
}

export const Icon = styled.div`
  color: ${({ color }) => color? handleColorType(color): 'inherit'};

  &.outline {
    background-color: transparent;
    padding: 11px;
    border-radius: 15px;
    border: 2px solid ${({ color }) => color? handleColorType(color): 'inherit'};
    color: ${({ color }) => color? handleColorType(color): 'inherit'};
  }

  @media (min-width: 800px) {
    header &.outline {
      border: 2px solid var(--white);
      color: var(--white);
    }
  } 
`
