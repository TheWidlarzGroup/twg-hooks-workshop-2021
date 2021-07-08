import { act, renderHook, RenderResult } from '@testing-library/react-hooks'
import { MutableRefObject, useRef } from 'react'

const assertRefValue = <T>(
  result: Pick<RenderResult<MutableRefObject<T>>, 'current'>,
  expected: T | unknown
) => {
  expect(result.current.current).toStrictEqual(expected)
}

describe('useRef behavior test', () => {
  it('should be always up to date', () => {
    const { result } = renderHook(() => useRef(0))
    const ref = result.current
    assertRefValue(result, 0)

    act(() => {
      assertRefValue(result, 0)

      ref.current = 1
      assertRefValue(result, 1)

      ref.current = 2
      assertRefValue(result, 2)

      ref.current = 3
      assertRefValue(result, 3)

      ref.current = 4
    })

    assertRefValue(result, 4)
  })
})
