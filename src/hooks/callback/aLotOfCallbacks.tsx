import React, { useCallback } from 'react'
import useCounter from '../utils/useCounter'

const elements = Array.from({ length: 10_000 }, (x, i) => i)

const ChildrenWithoutCallback = () => {
  const a = 1
  const b = ''
  const c = ''
  const d = ''

  const helloWorld = () => {
    console.log('hello world', a, b, c, d)
  }

  return <button onClick={helloWorld}>'button'</button>
}

const ChildrenWithCallback = () => {
  const a = 1
  const b = ''
  const c = ''
  const d = ''

  const helloWorld = useCallback(() => {
    console.log('hello world', a, b, c, d)
  }, [a, b, c, d])
  return <button onClick={helloWorld}>'button'</button>
}

export const ComponentsWithoutCallbacks = () => {
  const [counter, increment] = useCounter()

  return (
    <div>
      <button onClick={increment}>Rerender</button>
      {elements.map((key) => {
        console.log(key)
        return <ChildrenWithoutCallback key={key} />
      })}
    </div>
  )
}

export const ComponentsWithCallbacks = () => {
  const [counter, increment] = useCounter()

  console.log(elements.length)
  return (
    <div>
      <button onClick={increment}>Rerender</button>
      {elements.map((key) => {
        console.log(key)
        return <ChildrenWithCallback key={key} />
      })}
    </div>
  )
}

// const fn = () => console.log('hello world')
// const cb = useCallback(() => console.log('hello world'), [])
