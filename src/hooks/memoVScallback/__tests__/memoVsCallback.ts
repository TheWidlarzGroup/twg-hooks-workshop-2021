import { renderHook } from '@testing-library/react-hooks'
import { useCallback, useMemo } from 'react'
import { useFakeCallback } from '../../fakeHooks/useFakeCallback'

describe('memo vs callback', function () {
  const { result: memoResult } = renderHook(() => useMemo(() => (a1: number) => a1, []))
  const { result: callbackResult } = renderHook(() => useCallback((a1: number) => a1, []))
  const { result: fakeCallbackResult } = renderHook(() => useFakeCallback((a1: number) => a1, []))

  it('should results be equal', function () {
    expect(memoResult.current(4)).toStrictEqual(callbackResult.current(4))
    expect(fakeCallbackResult.current(4)).toStrictEqual(callbackResult.current(4))
  })

  it('should return functions', function () {
    expect(typeof memoResult.current).toBe('function')
    expect(typeof callbackResult.current).toBe('function')
    expect(typeof fakeCallbackResult.current).toBe('function')
  })
})

