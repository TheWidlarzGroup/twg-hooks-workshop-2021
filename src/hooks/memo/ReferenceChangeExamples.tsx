import React, { useEffect, useMemo } from 'react'
import useCounter from '../utils/useCounter'

export const WithoutMemo = () => {
  const [counter, incrementCounter] = useCounter({ limit: 5 })

  const user = { age: 0, name: 'Giorgio' }

  useEffect(() => {
    setTimeout(() => incrementCounter(), 1000)
  }, [incrementCounter, user])

  return <div>{counter}</div>
}

const user = { age: 0, name: 'Giorgio' }

export const WithoutMemoButUserIsOutsideComponent = () => {
  const [counter, incrementCounter] = useCounter({ limit: 5 })

  useEffect(() => {
    setTimeout(() => incrementCounter(), 1000)
  }, [incrementCounter, user])

  return <div>{counter}</div>
}

export const WithMemo = () => {
  const [counter, incrementCounter] = useCounter({ limit: 5 })

  const user = useMemo(() => ({ age: 0, name: 'Giorgio' }), [])

  useEffect(() => {
    setTimeout(() => incrementCounter(), 1000)
  }, [incrementCounter, user])

  return <div>{counter}</div>
}
