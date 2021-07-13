import { useMemo } from 'react'

export const useFakeRef = <T>(initial: T) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ({ current: initial }), [])
}
