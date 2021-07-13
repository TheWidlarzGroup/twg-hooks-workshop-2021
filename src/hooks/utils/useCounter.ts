import { useCallback, useState } from 'react'

const useCounter = (initial = 0) => {
  const [counter, setCounter] = useState(initial)

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1)
  }, [])
  return [counter, increment] as const
}

export default useCounter
