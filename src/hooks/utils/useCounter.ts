import { useCallback, useState } from 'react'

interface Props {
  initial?: number
  limit?: number
}

const useCounter = (props?: Props) => {
  const { initial, limit } = { initial: 0, limit: 9999999999999, ...props }

  const [counter, setCounter] = useState(initial)

  const increment = useCallback(() => {
    setCounter((prev) => (prev + 1 <= limit ? prev + 1 : prev))
  }, [limit])
  return [counter, increment] as const
}

export default useCounter
