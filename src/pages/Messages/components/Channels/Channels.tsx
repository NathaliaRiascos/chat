import { useState } from 'react';
import { Header, IconButton, Modal  } from '@/components';
import AddChatGroup from '../AddChatGroup/AddChatGroup';

function Channels() {
  const [ open, setOpen] = useState(false)
  return (
    <div>
      <Header title='Channels' fontSize='lg'>
        <IconButton
          icon='circle-plus'
          colorIcon='primary'
          sizeIcon='base'
          onClick={() => setOpen(!open)}
        />
      </Header>
      {open && <Modal
      toggleOpen={() => setOpen(false)}>
        <AddChatGroup />
      </Modal>}
    </div>
  )
}

export default Channels