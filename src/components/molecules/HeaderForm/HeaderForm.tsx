import { Div } from './HeaderForm.styled'
import { LinkComponent, Title } from '@/components'

interface Props {
  title: string
  to: string
  textParagraph: string
  textLink: string
}

function HeaderForm ({ title, to, textParagraph, textLink }: Props): JSX.Element {
  return (
    <Div>
      <Title title={title}/>
      <span className='p-account'>
        {textParagraph }
        <LinkComponent
        to={to}
        >{textLink}</LinkComponent>
      </span>
      <div className='or'>
        <hr className='line'/>
        <p>or</p>
        <hr className='line'/>
      </div>
    </Div>
  )
}

export default HeaderForm