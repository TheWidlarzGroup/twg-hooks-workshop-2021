import { useCallback } from 'react'

const useFakeMemo = <T>(generator: F0<T>, deps: unknown[]): T => {
  // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(generator(), deps)
}

export default useFakeMemo
