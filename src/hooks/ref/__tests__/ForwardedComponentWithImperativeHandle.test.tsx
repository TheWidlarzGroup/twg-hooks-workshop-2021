import { act, render, screen } from '@testing-library/react'
import { MutableRefObject } from 'react'
import {
  ForwardedComponentWithImperativeHandle,
  ImperativeHandleRef,
} from '../ForwardedComponentWithImperativeHandle'

describe('ForwardedComponentWithImperativeHandle tests', () => {
  it('should control component via custom ref api', function () {
    const ref: MutableRefObject<ImperativeHandleRef | null> = { current: null }

    render(<ForwardedComponentWithImperativeHandle ref={ref} />)

    expect(ref.current?.textStateButWithUpperCase).toBe(
      'HELLO FROM FORWARDEDCOMPONENTWITHIMPERATIVEHANDLE'
    )
    screen.getByText('Hello from ForwardedComponentWithImperativeHandle')

    act(() => {
      ref.current?.updateState('Hello from jest test :)')
    })

    screen.getByText('Hello from jest test :)')
    expect(ref.current?.textStateButWithUpperCase).toBe('HELLO FROM JEST TEST :)')

    act(() => {
      ref.current?.click()
    })

    screen.getByText('clicked with ref help')
    expect(ref.current?.textStateButWithUpperCase).toBe('CLICKED WITH REF HELP')
  })
})
