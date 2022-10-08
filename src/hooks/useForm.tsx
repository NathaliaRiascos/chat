import { ChangeEvent, MouseEvent, useState } from 'react'

export const useForm = <T extends Object> (initialState: any, func: (a: T) => void) => {
  const [form, setForm] = useState<T>(initialState)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent | MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    func(form)
  }
  return {
    form,
    handleChange,
    handleSubmit,
    ...form
  }
}
