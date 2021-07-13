import { useState } from 'react'

const useForceRerender = () => {
  const [, setCounter] = useState(0)

  const forceRerender = () => {
    setCounter((prev) => prev + 1)
  }

  return { forceRerender }
}

export default useForceRerender
