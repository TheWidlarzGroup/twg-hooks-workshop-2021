import React, { useCallback, useEffect, useState } from 'react'
import { Form, formInitialState } from '../../useForm/initialState'

export const OnlyFunctions = () => {
  const [counter, setCounter] = useState(0)
  const [age, setAge] = useState(0)
  const [referenceChangeCounter, setReferenceChangeCounter] = useState(0)

  // @ts-ignore
  const callbackAsMemo: Form = useCallback({ ...formInitialState, name: 'callback as Memo', age }, [
    age,
  ])

  useEffect(() => {
    setReferenceChangeCounter((prev) => prev + 1)
  }, [callbackAsMemo])

  useEffect(() => {
    if (counter % 5 === 1) {
      setAge((prevState) => prevState + 1)
    }
  }, [counter])

  return (
    <div>
      <div>referenceChangeCounter: {referenceChangeCounter}</div>
      <div>age: {callbackAsMemo.age}</div>
      <div>counter: {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Counter up</button>
    </div>
  )
}
