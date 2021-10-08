import React, { useEffect, useState } from 'react'
import { useForm } from './useForm'
import { emailValidation } from '../email.regexp'
import { Input } from '../Input'

const initialValue = { username: '', email: '', password: '', rePassword: '' }

const createValidators = (form: { current: typeof initialValue }) => ({
  username: () => form.current.username.length > 4,
  email: () => emailValidation.test(form.current.email),
  password: () => form.current.password.length >= 8,
  rePassword: () => form.current.rePassword === form.current.password,
})

export const Solution3 = () => {
  const [rerenders, setRerenders] = useState(0)

  const { form, validators, updateField } = useForm({
    initialValue,
    validators: createValidators,
  })

  useEffect(() => {
    setRerenders((el) => el + 1)
  }, [form])

  return (
    <div>
      rerenders: {rerenders}
      <Input
        valid={validators.username}
        label={'username'}
        onChange={(value) => updateField('username', value)}
      />
      <Input
        valid={validators.email}
        label={'email'}
        onChange={(value) => updateField('email', value)}
      />
      <Input
        valid={validators.password}
        label={'password'}
        onChange={(value) => updateField('password', value)}
      />
      <Input
        valid={validators.rePassword}
        label={'re-password'}
        onChange={(value) => updateField('rePassword', value)}
      />
    </div>
  )
}
