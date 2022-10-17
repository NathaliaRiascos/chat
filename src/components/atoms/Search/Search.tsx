import { Input, Form } from './Search.styled'


function Search({ text }: {text: string}) {
  return (
    <Form>
      <Input placeholder={text? text: 'Search...'}/>
    </Form>
  )
}

export default Search