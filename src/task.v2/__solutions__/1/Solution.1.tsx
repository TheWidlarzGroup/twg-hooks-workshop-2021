import React from 'react'
import { useForm } from './useForm'
import { Input } from '../Input'

export const Solution = () => {
  const { validators, updateField } = useForm()

  return (
    <div>
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
