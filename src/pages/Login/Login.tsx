import React from 'react'
import { LayoutAuth } from '@/styles'
import imgUrl from '@/assets/imgLogin.webp'
import { useNavigate } from 'react-router-dom'
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
import { signInUser, logout } from '@/redux/features/'


function Login(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  

  const signIn = (user: User) => {
    dispatch(signInUser(user))
    navigate('/home')
  }

  const { email, password, handleChange, handleSubmit } = useForm<User>({
    email: '',
    password: ''
  }, signIn)

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
        <button onClick={() => dispatch(logout())}>Salir </button>
        <HeaderForm 
          title='Sign in'
          to='/register'
          textParagraph='Not a member?'
          textLink='Sign up'
        />
        <Form onSubmit={handleSubmit}>
          <Input
            name='email'
            type='email'
            value={email}
            placeholder='Email'
            onChange={handleChange}
          />
          <div className='contain__password'>
            <Input 
              name='password' 
              type='password'
              value={password}
              placeholder='Password'
              onChange={handleChange}
            />
            <Button
              type='button'
              style='link'
              color='blue'
            >
              Forgot password?
            </Button>
          </div>
          <Button type='submit' style='primary'>Sign in</Button>
        </Form>
      </div>
    </LayoutAuth>
  )
}

export default Login