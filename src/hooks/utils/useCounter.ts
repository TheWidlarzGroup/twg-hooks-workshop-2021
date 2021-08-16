import { useCallback, useEffect, useState } from 'react'

interface Props {
  initial?: number
  limit?: number
  onLimitReached?: F0
}

const useCounter = (props?: Props) => {
  const { initial, limit } = { initial: 0, limit: 9999999999999, ...props }

  const [counter, setCounter] = useState(initial)

  const increment = useCallback(() => {
    setCounter((prev) => (prev + 1 <= limit ? prev + 1 : prev))
  }, [limit])

  useEffect(() => {
    if (limit === counter) {
      props?.onLimitReached?.()
    }
  })

  return [counter, increment] as const
}

export default useCounter
