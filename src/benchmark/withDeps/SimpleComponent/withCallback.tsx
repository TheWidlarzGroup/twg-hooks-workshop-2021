import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Props } from '../Props'

export const SimpleComponentCallback = ({ counter }: Props) => {
  const [_counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  const arr = useMemo(() => [], [])
  const func = useCallback(
    () => console.log('hello world' + counter + counter2 + counter3 * Math.random(), arr.length),
    [arr, counter, counter2, counter3]
  )

  useEffect(() => {
    if (counter % 3 === 0) {
      setCounter((prev) => prev + 1)
    }

    if (counter % 4 === 0) {
      setCounter2((prev) => prev + 1)
    }

  }, [counter])

  return <div onClick={func}>SimpleComponentCallback</div>
}
