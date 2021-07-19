import React, { useMemo, useState } from 'react'
import { registerUsage } from '../../utils/registerUsage'

export const MemoizedHeavyCalculation = () => {
  const [state, setState] = useState<Record<string, number>>({})

  const [number, setNumber] = useState(0)

  const memoizedValue = useMemo(() => {
    const array: number[] = []

    for (let i = 0; i < number * 10_000; i++) {
      array.push(i)
    }

    setState((prev) => registerUsage(prev, number))

    return array
  }, [number])

  console.log(memoizedValue)

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
