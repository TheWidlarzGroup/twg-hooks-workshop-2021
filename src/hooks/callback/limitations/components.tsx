import React, { memo, useEffect } from 'react'
import { Form } from '../../useForm/initialState'

interface Props {
  onChange: F1<string>
}

export const Input = ({ onChange }: Props) => {
  useEffect(() => {
    console.log('input update')
  }, [onChange])

  return <input type="text" onChange={(event) => onChange(event.target.value)} />
}

interface Props2<T extends Record<string, unknown>> {
  field: keyof T
  onChange: F2<keyof T, string>
}

export const HeavyInput = ({ onChange, field }: Props2<Form>) => {
  console.log('input update')

  for (let i = 0; i < 5000; i++) {
    console.count('component expensive calculation')
  }
  console.countReset('component expensive calculation')

  useEffect(() => {
    console.log('input update')
  }, [onChange])

  return <input type="text" onChange={(event) => onChange(field, event.target.value)} />
}

export const HeavyInputMemoized = memo(HeavyInput)

interface Props3 {
  onChange: F1<string>
}

export const HeavyInputCurringMemoized = memo(({ onChange }: Props3) => {
  console.log('input update')

  for (let i = 0; i < 5000; i++) {
    console.count('component expensive calculation')
  }
  console.countReset('component expensive calculation')

  useEffect(() => {
    console.log('input update')
  }, [onChange])

  return <input type="text" onChange={(event) => onChange(event.target.value)} />
})
