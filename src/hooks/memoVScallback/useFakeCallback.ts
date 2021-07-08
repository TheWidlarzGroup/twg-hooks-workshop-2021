import { useMemo } from 'react'

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useFakeCallback = (func: Function, deps: any[]) => useMemo(() => func, deps)
