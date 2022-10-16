import { useNavigate } from 'react-router-dom'
import { HeaderStyled } from './Header.styled'
import { Avatar } from '@/components'

import user from '@/assets/user.png'

function Header(imgURL: string) {
  return (
    <HeaderStyled>
    
    <div>
     <Avatar src={user} alt='imagen de usuario' />
     <div>
      <h1>username</h1>
      <span>online</span>
     </div>
    </div>
    </HeaderStyled>
  )
}

export default Header