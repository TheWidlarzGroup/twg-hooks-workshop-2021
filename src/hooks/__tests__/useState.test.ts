import { act, renderHook, RenderResult } from '@testing-library/react-hooks'
import { Dispatch, SetStateAction, useState } from 'react'

const assertState = <T>(
  result: Pick<RenderResult<[T, Dispatch<SetStateAction<T>>?]>, 'current'>,
  expected: T | unknown
) => {
  const currentState = result.current[0]

  return expect(currentState).toStrictEqual(expected)
}

const assertStateUpdateParam = <T>(
  setState: Dispatch<SetStateAction<T>>,
  expected: T | unknown
) => {
  setState((prev) => {
    assertState({ current: [prev] }, expected)
    return prev
  })
}

describe('useState behavior test', () => {
  it('should update state in next frame', () => {
    const { result } = renderHook(() => useState(0))
    const setState = result.current[1]

    assertState(result, 0)

    act(() => {
      assertState(result, 0)

      setState(1)
      assertState(result, 0)

      setState((prev) => prev + 1)
      assertState(result, 0)

      assertStateUpdateParam(setState, 2)

      assertState(result, 0)

      setState((prev) => prev + 1)
      assertState(result, 0)
    })

    assertState(result, 3)

    act(() => {
      setState(0)
      assertState(result, 3)

      assertStateUpdateParam(setState, 0)

      assertState(result, 3)

      setState((prev) => prev + 5)
      assertState(result, 3)

      assertStateUpdateParam(setState, 5)

      assertState(result, 3)
    })

    assertState(result, 5)
  })
})
