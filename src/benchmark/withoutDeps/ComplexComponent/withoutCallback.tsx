import React, { useState } from 'react'

export const ComplexComponent = () => {
  const [state, setState] = useState(0)

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

  return (
    <div
      onClick={() => {
        func(4)
        func2(4)
        func3(4)
        func4(4)
      }}>
      ComplexComponent
    </div>
  )
}
