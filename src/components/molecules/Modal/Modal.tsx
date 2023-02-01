import styles from './Modal.module.css'
import { Icon } from '@/components'
import { Container, Modal, Header, BtnClose, Content } from './Modal.styled';


type MyCallback = (open: boolean) => boolean;

interface Props {
  title?: JSX.Element | JSX.Element[]
  toggleOpen: (ele: MyCallback) => void
  children: JSX.Element | JSX.Element[]
}

function ModalComponent({children, toggleOpen, title}: Props) {
  return (
    <Container>
      <Modal>
        {/* <Header>
          {title}
        </Header> */}
        <BtnClose  onClick={() => toggleOpen(open => !open)}>
          <Icon iconName='xmark'/>
        </BtnClose>
        <Content>
          { children }
        </Content>
      </Modal>
    </Container>
  )
}

export default ModalComponent