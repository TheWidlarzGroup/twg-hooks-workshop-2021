import { useState } from 'react'

const useForceRerender = () => {
  const [, setCounter] = useState(0)

  const forceRerender = () => {
    setCounter((prev) => prev + 1)
  }

  const forceRerenderWithCallback = (callback?: F0) => {
    callback && callback()
    setCounter((prev) => prev + 1)
  }

  return { forceRerender, forceRerenderWithCallback }
}

export default useForceRerender
