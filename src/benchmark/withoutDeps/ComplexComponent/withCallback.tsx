import React, { useCallback, useState } from 'react'

export const ComplexComponentCallback = () => {
  const [state, setState] = useState(0)

  const func = useCallback((a: number) => {
    const b = Math.random() * Math.random() * Math.random()
    const c = a * b
    console.log(c)
    setState(c)
  }, [])

  const func2 = useCallback((a: number) => {
    const b = Math.random() * Math.random() * Math.random()
    const c = a * b
    console.log(c)
    setState(c)
  }, [])

  const func3 = useCallback((a: number) => {
    const b = Math.random() * Math.random() * Math.random()
    const c = a * b
    console.log(c)
    setState(c)
  }, [])

  const func4 = useCallback((a: number) => {
    const b = Math.random() * Math.random() * Math.random()
    const c = a * b
    console.log(c)
    setState(c)
  }, [])

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
