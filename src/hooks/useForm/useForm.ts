import { useCallback, useMemo, useState } from 'react'
import { formInitialState } from './initialState'

export const useBadForm1 = () => {
  const [form, setForm] = useState(formInitialState)

  const handleFormUpdate = useCallback(
    (payload) => {
      setForm({ ...form, ...payload })
    },
    [form]
  )
  return { form, handleFormUpdate }
}

export const useBadForm2 = () => {
  const [form, setForm] = useState(formInitialState)

  const updateAge = (age: number) => setForm((prev) => ({ ...prev, age }))
  const updateName = (name: string) => setForm((prev) => ({ ...prev, name }))
  const updateLocation = (location: string) => setForm((prev) => ({ ...prev, location }))

  return { form, updateAge, updateName, updateLocation }
}

export const useBadForm3 = () => {
  const [form, setForm] = useState(formInitialState)

  const updateAge = useCallback((age: number) => setForm((prev) => ({ ...prev, age })), [])
  const updateName = useCallback((name: string) => setForm((prev) => ({ ...prev, name })), [])
  const updateLocation = useCallback(
    (location: string) => setForm((prev) => ({ ...prev, location })),
    []
  )

  return { form, updateAge, updateName, updateLocation }
}

export const useGoodForm = <T extends Record<string, unknown>>(initial: T) => {
  const [form, setForm] = useState(initial)

  const handleFormUpdate = useCallback(
    (payload: Partial<T>) => setForm((prev) => ({ ...prev, ...payload })),
    []
  )

  const updateField = useCallback(
    (field: keyof T, payload: T[typeof field]) => setForm((prev) => ({ ...prev, payload })),
    []
  )

  const updateFieldCurried = useCallback(
    (field: keyof T) => (payload: T[typeof field]) => setForm((prev) => ({ ...prev, payload })),
    []
  )

  return { form, handleFormUpdate, updateField, updateFieldCurried }
}

export const useForm = <T extends Record<string, unknown>>(initial: T) => {
  const [form, setForm] = useState(initial)

  const handlers = useMemo(
    () => ({
      handlePartialUpdate: (payload: Partial<T>) => setForm((prev) => ({ ...prev, ...payload })),

      updateField: (field: keyof T, payload: T[typeof field]) =>
        setForm((prev) => ({ ...prev, [field]: payload })),
    }),
    []
  )
  return { form, ...handlers }
}
