import { Div } from './HeaderForm.styled'
import { LinkComponent } from '@/components'

interface Props {
  title: string
  to: string
  textParagraph: string
  textLink: string
}

function HeaderForm ({ title, to, textParagraph, textLink }: Props): JSX.Element {
  return (
    <Div>
      <div className='title'>
        <h1>{title}</h1>
        <span className='point'></span>
      </div>
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