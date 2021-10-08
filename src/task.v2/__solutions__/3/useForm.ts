import { MutableRefObject, useRef, useState } from 'react'

export const useForm = <T extends Record<string, any>>(props: {
  initialValue: T
  debounceTime?: number
  validators?(form: { current: T }): Partial<Record<keyof T, () => boolean>>
}): {
  form: T
  currentForm: { current: T }
  validators: Partial<Record<keyof T, () => boolean>>
  updateField: (field: keyof T, value: T[typeof field], callback?: (form: T) => void) => void
} => {
  const { debounceTime = 1500, initialValue } = props
  const currentForm = useRef(initialValue)
  const [form, setForm] = useState(currentForm.current)
  const timeoutId = useRef<NodeJS.Timeout>(null) as MutableRefObject<NodeJS.Timeout>

  const validators = props.validators?.(currentForm) || {}

  const updateField = (field: keyof T, value: T[typeof field], callback?: (form: T) => void) => {
    currentForm.current = { ...currentForm.current, [field]: value }

    clearTimeout(timeoutId.current)

    timeoutId.current = setTimeout(() => {
      setForm(currentForm.current)
      callback?.(currentForm.current)
    }, debounceTime)
  }

  return { form, currentForm, validators, updateField }
}
