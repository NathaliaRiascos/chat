import React from 'react'
import { LayoutAuth } from '@/styles'
import imgUrl from '@/assets/imgRegister.webp'
import {
  LinkComponent,
  IconButton,
  Form,
  Input,
  Button,
  HeaderForm
} from '@/components'

function Register(): JSX.Element {
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
          to='/login'
          textParagraph='Already have an account?'
          textLink='Login'
        />
        <Form>
          <Input
            name='username'
            type='text'
            placeholder='Username'
          />
          <Input 
            name='email' 
            type='email'
            placeholder='Email' 
          />
          <Input 
            name='password' 
            type='password'
            placeholder='Password' 
          />
          <Button type='submit' style='primary'>Create account</Button>
        </Form>
      </div>
    </LayoutAuth>
  )
}

export default Register