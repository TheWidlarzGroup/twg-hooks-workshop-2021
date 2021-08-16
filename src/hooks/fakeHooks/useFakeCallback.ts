import { useMemo } from 'react'

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useFakeCallback = <T>(func: T extends Function, deps?: any[]) => useMemo(() => func, deps)
