import React, {MouseEvent } from 'react'
import { LayoutAuth } from '@/styles'
import imgUrl from '@/assets/imgRegister.webp'
import user from '@/assets/user.png'
import {
  LinkComponent,
  IconButton,
  Form,
  Input,
  Button,
  HeaderForm
} from '@/components'
import { useForm } from '@/hooks/useForm'
import { User } from '@/models'

import { useAppDispatch } from '@/redux/hooks'
import { singUpUser } from '@/redux/features/'


function Register(): JSX.Element {
  const dispatch = useAppDispatch()
  
  const signUp = (user: User) => {
    dispatch(singUpUser(user))
  }
  const { username, email, password, handleChange, handleSubmit } = useForm<User>({
    username: '',
    email: '',
    password: ''
  }, signUp)

  return (
    <LayoutAuth>
      <div className='left'>
        <header>
          <LinkComponent to='/'>
            <IconButton
              type='button'
              icon='arrow-left'
              styleIcon='outline'
              styleButton='link'
              color='blue'
              size='small'
            >
              Home
            </IconButton>
          </LinkComponent>
        </header>
        <img src={imgUrl} loading='eager' alt='main image of login page'/>
      </div>
      <div className='right'>
        <HeaderForm 
          title='Create account'
          to='/'
          textParagraph='Already have an account?'
          textLink='Login'
        />
        <Form onSubmit={handleSubmit}>
          <Input
            name='username'
            type='text'
            value={username}
            placeholder='Username'
            onChange={handleChange}
          />
          <Input 
            name='email' 
            type='email'
            value={email}
            placeholder='Email'
            onChange={handleChange}
          />
          <Input 
            name='password' 
            type='password'
            value={password}
            placeholder='Password'
            onChange={handleChange}
          />
          <Button type='submit' style='primary'>Create account</Button>
        </Form>
      </div>
    </LayoutAuth>
  )
}

export default Register