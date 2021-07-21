import { useImperativeHandle, useRef } from 'react'

export const useHook1 = () => {
  const ref = useRef(null)

  useImperativeHandle(ref, () => {}, [])

  return { ref }
}
