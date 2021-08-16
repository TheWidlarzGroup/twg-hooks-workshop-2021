import React, { useEffect, useMemo, useState } from 'react'
import { Props } from '../Props'

export const SimpleComponent = ({ counter }: Props) => {
  const [_counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  const arr = useMemo(() => [], [])
  const func = () =>
    console.log('hello world' + counter + counter2 + counter3 * Math.random(), arr.length)

  useEffect(() => {
    if (counter % 3 === 0) {
      setCounter((prev) => prev + 1)
    }

    if (counter % 4 === 0) {
      setCounter2((prev) => prev + 1)
    }
  }, [counter])

  return <div onClick={func}>SimpleComponent</div>
}
