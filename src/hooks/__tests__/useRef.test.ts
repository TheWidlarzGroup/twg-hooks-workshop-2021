import { act, renderHook, RenderResult } from '@testing-library/react-hooks'
import { MutableRefObject, useRef } from 'react'
import { useFakeRef } from '../fakeHooks/useFakeRef'

const assertRefValue = <T>(
  result: Pick<RenderResult<MutableRefObject<T>>, 'current'>,
  expected: T | unknown
) => {
  expect(result.current.current).toStrictEqual(expected)
}

describe.each([
  { name: 'real ref', useHook: useRef },
  { name: 'fake ref', useHook: useFakeRef },
])('useRef behavior test', ({ name, useHook }) => {
  test(`case: ${name}, updated should be immediate`, () => {
    const { result } = renderHook(() => useHook(0))
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

  it('should return object', () => {
    const { result } = renderHook(() => useHook(0))
    expect(typeof result).toBe('object')
  })
})
