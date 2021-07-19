import React, { useMemo, useRef, useState } from 'react'
import { registerUsage } from '../utils/registerUsage'

export const MemoizedHeavyCalculationWithCache = () => {
  const [state, setState] = useState<Record<string, number>>({})
  const cache = useRef<Record<string, number[]>>({})

  const [number, setNumber] = useState(0)

  const memoizedValue = useMemo(() => {
    if (cache.current[number]) {
      console.log({ cache })
      return cache.current[number]
    }

    setState((prev) => {
      console.log('log')
      console.log(registerUsage(prev, number))
      return registerUsage(prev, number)
    })

    const array: number[] = []

    for (let i = 0; i < number * 10_000; i++) {
      array.push(i)
    }

    cache.current[number] = [...array]
    return array
  }, [number])

  console.log({ memoizedValue, state })

  return (
    <div>
      <input max={10} min={0} type="number" onChange={(e) => setNumber(Number(e.target.value))} />
      <div>
        {Object.entries(state).map(([key, value]) => {
          return (
            <div key={key}>
              {key} : {value}
            </div>
          )
        })}
      </div>
    </div>
  )
}
