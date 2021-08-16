import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Props } from '../Props'

export const ComplexComponentCallback = ({ counter }: Props) => {
  const [state, setState] = useState(0)
  const [_counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  const arr = useMemo(() => [], [])

  const func = useCallback(
    (a: number) => {
      const b = Math.random() * Math.random() * Math.random()
      const c = a * b
      console.log(c)
      setState(c)
    },
    [state, counter, arr]
  )

  const func2 = useCallback(
    (a: number) => {
      const b = Math.random() * Math.random() * Math.random()
      const c = a * b
      console.log(c)
      setState(c)
    },
    [counter3, counter2, arr]
  )

  const func3 = useCallback(
    (a: number) => {
      const b = Math.random() * Math.random() * Math.random()
      const c = a * b
      console.log(c)
      setState(c)
    },
    [counter3, counter, arr]
  )

  const func4 = useCallback(
    (a: number) => {
      const b = Math.random() * Math.random() * Math.random()
      const c = a * b
      console.log(c)
      setState(c)
    },
    [state, counter, counter2, counter3, arr]
  )

  useEffect(() => {
    if (counter % 3 === 0) {
      setCounter((prev) => prev + 1)
    }

    if (counter % 4 === 0) {
      setCounter2((prev) => prev + 1)
    }

  }, [counter])

  return (
    <div
      onClick={() => {
        func(4)
        func2(4)
        func3(4)
        func4(4)
      }}>
      ComplexComponentCallback
    </div>
  )
}
