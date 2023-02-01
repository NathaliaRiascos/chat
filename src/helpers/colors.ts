export const handleColorType = (color: string )=> {
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
