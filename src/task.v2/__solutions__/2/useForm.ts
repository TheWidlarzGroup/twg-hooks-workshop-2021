import { useReducer, useRef } from 'react'

export const useForm = <T extends Record<string, any>>(props: {
  initialValue: T
  watchers?: (keyof T)[]
  validators?(form: { current: T }): Partial<Record<keyof T, () => boolean>>
}): {
  form: T
  validators: Partial<Record<keyof T, () => boolean>>
  updateField: (field: keyof T, value: T[typeof field]) => void
} => {
  const { watchers = [], initialValue } = props

  const [, forceRerender] = useReducer(
    (el) => el + 1,
    () => 0
  )
  const form = useRef(initialValue)
  const validators = props.validators?.(form) || {}

  const updateField = (field: keyof T, value: T[typeof field]) => {
    form.current = { ...form.current, [field]: value }

    if (watchers.includes(field)) {
      forceRerender()
    }
  }

  return { form: form.current, validators, updateField }
}
