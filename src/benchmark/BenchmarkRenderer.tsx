import React, { MutableRefObject, useEffect, useMemo, useRef, useState, VFC } from 'react'
import useCounter from '../hooks/utils/useCounter'
import { setInterval } from 'timers'

interface Props {
  ComponentToRender: VFC<{ counter: number }>
  elements?: number
  rerenders?: number
  intervalTime?: number
}

export const BenchmarkRenderer = ({
  ComponentToRender,
  elements = 10_000,
  rerenders = 100,
  intervalTime = 0,
}: Props) => {
  const [active, setActive] = useState(true)
  const _elements = useMemo(() => Array.from({ length: elements }, (x, i) => i), [elements])
  const intervalIdRef = useRef<number>(null) as MutableRefObject<number>
  const [counter, increment] = useCounter({
    limit: rerenders,
    onLimitReached: () => {
      intervalIdRef.current && clearInterval(intervalIdRef.current)
      setActive(false)
    },
  })

  useEffect(() => {
    intervalIdRef.current = setInterval(increment, intervalTime) as any
  }, [increment, intervalTime])

  return (
    <div>
      {active ? (
        _elements.map((element) => <ComponentToRender key={element} counter={counter} />)
      ) : (
        <div>END REACHED</div>
      )}
    </div>
  )
}
