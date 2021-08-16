import React, {useEffect, useMemo, useState} from 'react'
import {Props} from '../Props'

export const ComplexComponent = ({ counter }: Props) => {
  const [state, setState] = useState(0)
  const [_counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  const arr = useMemo(() => [], [])

  const func = (a: number) => {
    const b = Math.random() * Math.random() * Math.random()
    const c = a * b
    console.log(c)
    setState(c)
  }

  const func2 = (a: number) => {
    const b = Math.random() * Math.random() * Math.random()
    const c = a * b
    console.log(c)
    setState(c)
  }

  const func3 = (a: number) => {
    const b = Math.random() * Math.random() * Math.random()
    const c = a * b
    console.log(c)
    setState(c)
  }

  const func4 = (a: number) => {
    const b = Math.random() * Math.random() * Math.random()
    const c = a * b
    console.log(c)
    setState(c)
  }

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
