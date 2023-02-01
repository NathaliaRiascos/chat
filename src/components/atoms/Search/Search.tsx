import { Input, Form } from './Search.styled'

interface Props {
  text: string,
  color?: string
}
function Search({ text, color = 'white' }: Props) {
  return (
    <Form>
      <Input color={color} placeholder={text? text: 'Search...'}/>
    </Form>
  )
}

export default Search