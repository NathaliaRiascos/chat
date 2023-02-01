export const handleFontSize = (fontSize: string )=> {
  switch (fontSize) {     
    case "xs":
      return "var(--text-xs)";
    case "sm":
      return "var(--text-sm)";
    case 'base':
      return 'var(--text-base)'
    case 'lg':
      return 'var(--text-lg)'
    case 'xl':
      return 'var(--text-xl)'
    case '2lg':
        return 'var(--text-2lg)'
    default:
      return fontSize;
  }
}
