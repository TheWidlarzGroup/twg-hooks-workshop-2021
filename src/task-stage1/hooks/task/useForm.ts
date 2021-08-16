import { ChangeEvent, RefObject, useCallback, useMemo, useRef, useState } from 'react'
import { ackermann } from '../../../hooks/utils/ackerman'

const formInitial = {
  name: '',
  surname: '',
  hobbies: '',
  technologies: '',
  attributes: '',
  whyWantWorkWithUs: '',
}

type Handlers = Record<keyof typeof formInitial, F1<ChangeEvent<HTMLInputElement>>>

type UseForm = () => {
  formRef: RefObject<typeof formInitial>
  handlers: Handlers
}

export const useForm: UseForm = () => {
  const formRef = useRef(formInitial)

  const handlers = useMemo(() => {
    const keys = Object.keys(formInitial) as [keyof typeof formInitial]

    return keys.reduce((acc, key) => {
      acc[key] = (e: ChangeEvent<HTMLInputElement>) => {
        formRef.current[key] = e.target.value as typeof formInitial[typeof key]
      }
      return acc
    }, {} as Handlers)
  }, [])

  return { handlers, formRef }
}

export const useForma = () => {
  const [param, setParam] = useState(0)
  const [param2, setParam2] = useState(0)

  const precalculatedFunction = useMemo(() => {
    const ackermannResult = ackermann(param, param2) // heavy calculation

    return (multiplier: number) => ackermannResult * multiplier
  }, [param, param2])

  return { precalculatedFunction }
}

export const useCustomHook = () => {
  const [state, setState] = useState<number>(1)
  const [state2, setState2] = useState<number>(1)
  const [state3, setState3] = useState<number>(1)
  const [state4, setState4] = useState<number>(1)

  return useMemo(() => state * state2 * state3 * state4, [state, state2, state3, state4])
}
