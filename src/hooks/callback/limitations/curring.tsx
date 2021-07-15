import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Form, formInitialState } from '../../useForm/initialState'
import { Input, HeavyInputMemoized, HeavyInput, HeavyInputCurringMemoized } from './components'

export const CallbackCurring = () => {
  const [state, setState] = useState(formInitialState)
  const counters = useRef({ curriedBase: 0, curried: 0 })
  const curriedCallback = useCallback(
    (field: keyof Form) => (event: ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({ ...prev, [field]: event.target.value }))
    },
    []
  )

  useEffect(() => {
    console.log('curried callback base ref changed')
    counters.current.curriedBase = counters.current.curriedBase + 1
  }, [curriedCallback])

  useEffect(() => {
    console.log('curried callback ref changed')

    counters.current.curried = counters.current.curried + 1
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curriedCallback('name')])

  return (
    <div>
      <input type="text" onChange={curriedCallback('name')} />
      <div>{state.name}</div>
      <br />
      <br />
      <div>curried base counter: {counters.current.curriedBase} </div>
      <br />
      <div>curried counter: {counters.current.curried} </div>
    </div>
  )
}

export const CallbackCurring2 = () => {
  const [state, setState] = useState(formInitialState)
  const counters = useRef({ curriedBase: 0, curried: 0 })
  const curriedCallback = useCallback(
    (field: keyof Form) => (value: string) => {
      setState((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  return (
    <div>
      <Input onChange={curriedCallback('name')} />
      <div>{state.name}</div>
      <br />
      <br />
      <div>curried base counter: {counters.current.curriedBase} </div>
      <br />
      <div>curried counter: {counters.current.curried} </div>
    </div>
  )
}

export const CallbackCurring3 = () => {
  const [state, setState] = useState(formInitialState)
  const counters = useRef({ curriedBase: 0, curried: 0 })
  const onChangeCallback = useCallback((field: keyof Form, value: string) => {
    setState((prev) => ({ ...prev, [field]: value }))
  }, [])

  return (
    <div>
      <HeavyInput field={'name'} onChange={onChangeCallback} />
      <div>{state.name}</div>
      <br />
      <br />
      <div>curried base counter: {counters.current.curriedBase} </div>
      <br />
      <div>curried counter: {counters.current.curried} </div>
    </div>
  )
}

export const CallbackCurring4 = () => {
  const [state, setState] = useState(formInitialState)
  const counters = useRef({ curriedBase: 0, curried: 0 })
  const onChangeCallback = useCallback((field: keyof Form, value: string) => {
    setState((prev) => ({ ...prev, [field]: value }))
  }, [])

  return (
    <div>
      <HeavyInputMemoized
        field={'name'}
        onChange={(name, value) => onChangeCallback(name, value)}
      />
      <div>{state.name}</div>
      <br />
      <br />
      <div>curried base counter: {counters.current.curriedBase} </div>
      <br />
      <div>curried counter: {counters.current.curried} </div>
    </div>
  )
}

export const CallbackCurring5 = () => {
  const [state, setState] = useState(formInitialState)
  const counters = useRef({ curriedBase: 0, curried: 0 })
  const onChangeCallback = useCallback((field: keyof Form, value: string) => {
    setState((prev) => ({ ...prev, [field]: value }))
  }, [])

  return (
    <div>
      <HeavyInputMemoized field={'name'} onChange={onChangeCallback} />
      <div>{state.name}</div>
      <br />
      <br />
      <div>curried base counter: {counters.current.curriedBase} </div>
      <br />
      <div>curried counter: {counters.current.curried} </div>
    </div>
  )
}

export const CallbackCurring6 = () => {
  const [state, setState] = useState(formInitialState)
  const counters = useRef({ curriedBase: 0, curried: 0 })
  const onChangeCallback = useCallback(
    (field: keyof Form) => (value: string) => {
      setState((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  return (
    <div>
      <HeavyInputCurringMemoized onChange={onChangeCallback('name')} />
      <div>{state.name}</div>
      <br />
      <br />
      <div>curried base counter: {counters.current.curriedBase} </div>
      <br />
      <div>curried counter: {counters.current.curried} </div>
    </div>
  )
}
