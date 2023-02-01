import { useState } from 'react';
import Picker from 'emoji-picker-react'
import { Input, Form, IconButton } from '@/components'

import { useCreateChatMutation } from '@/services'
import { Emoji } from './Form.styled'

function FormChat({  idGroup }) {
  const [message, setMessage] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [ createChat ] = useCreateChatMutation()
  
  const handleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }
  const onSubmit = (e) => {
    e.preventDefault()  
    if (message) createChat({ message, idGroup})
    setMessage('')
  }

  const handleEmojiClick = (emoji) => {
    let messageTemp = message
    messageTemp += emoji.emoji
    setMessage(messageTemp)
  }

  return (
    <Form onSubmit={onSubmit} direction='row'>
      <Emoji>
        <IconButton
          type='button'
          sizeIcon='xl'
          colorIcon='primary'
          icon='face-smile'
          onClick={handleEmojiPicker}
        />
        { showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
      </Emoji>
      <Input
        value={message}
        name='message'
        type='text'
        placeholder='Send a message'
        onChange={(e) => setMessage(e.target.value)}
      />
      <IconButton
        type='submit'
        colorBtn='primary'
        colorIcon='white'
        styleButton='full'
        icon='paper-plane'
      />
    </Form>
  )
}

export default FormChat