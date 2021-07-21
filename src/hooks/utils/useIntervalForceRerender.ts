import { useEffect, useState } from 'react'

export const useForceRerenderInterval = (delay: number) => {
  const [, forceRerender] = useState(false)

  useEffect(() => {
    setInterval(() => {
      forceRerender((prev) => !prev)
    }, delay)
  }, [delay])
}
