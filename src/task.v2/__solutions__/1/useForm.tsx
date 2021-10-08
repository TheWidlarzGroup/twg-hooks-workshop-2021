import { useRef } from 'react'
import { emailValidation } from '../email.regexp'

const initialValue = { username: '', email: '', password: '', rePassword: '' }

const createValidators = (form: { current: typeof initialValue }) => ({
  username: () => form.current.username.length > 4,
  email: () => emailValidation.test(form.current.email),
  password: () => form.current.password.length >= 8,
  rePassword: () => form.current.rePassword === form.current.password,
})
export const useForm = () => {
  const form = useRef(initialValue)
  const validators = createValidators(form)

  const updateField = (field: keyof typeof initialValue, value: string) => {
    form.current[field] = value
  }

  return { form, validators, updateField }
}
