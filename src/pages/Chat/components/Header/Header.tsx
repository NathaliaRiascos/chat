import { useNavigate } from 'react-router-dom'
import { HeaderStyled, UserInfo } from './Header.styled'
import { Avatar, Card } from '@/components';

import user from '@/assets/user.png'
import { useAppDispatch } from '@/redux/hooks';
import { setOpen } from '@/redux/features';


function Header({ data} : any) {
  const dispatch = useAppDispatch()

  return (
    <HeaderStyled>
      <button className='btnBack' onClick={() => dispatch(setOpen(false))}>Go Back One</button>
      <UserInfo>
        <Avatar src={data?.photo} alt=''/>
        <h2>{data?.name}</h2>
      </UserInfo>
     
     <button>Call</button>
    </HeaderStyled>
  )
}

export default Header