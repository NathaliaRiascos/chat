import React from 'react'
import { LayoutAuth } from '@/styles'
import imgUrl from '@/assets/imgLogin.webp'
import {
  LinkComponent,
  IconButton,
  Form,
  Input,
  Button,
  HeaderForm
} from '@/components'

function Login(): JSX.Element {
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
          title='Sign in'
          to='/register'
          textParagraph='Not a member?'
          textLink='Sign up'
        />
        <Form>
          <Input
            name='email'
            type='email'
            placeholder='Email'
          />
          <div className='contain__password'>
            <Input 
              name='password' 
              type='password'
              placeholder='Password' 
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