import { useEffect, useRef } from 'react'

// React renders twice when in DEV mode??
// https://stackoverflow.com/questions/63208359/why-does-a-simple-react-component-render-twice

export const useQueue = (...args: any[]) => {
  const last = useRef(0)
  let result = null

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    result = typeof args[last.current] === 'function' ? args[last.current]() : args[last.current]

    last.current = (last.current + 1) % args.length
  })

  return result
}
