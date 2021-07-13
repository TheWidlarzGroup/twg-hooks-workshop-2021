import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from 'react'
import useForceRerender from '../utils/useForceRerender'

export type ImperativeHandleRef = {
  click: F0
  updateState: F1<string>
  textStateButWithUpperCase: string
}

export const ForwardedComponentWithImperativeHandle = () => {
  const ref = useRef<ImperativeHandleRef>(null)
  const { forceRerender } = useForceRerender()

  return (
    <div>
      <input
        value={ref.current?.textStateButWithUpperCase}
        onChange={(e) => ref.current?.updateState(e.target.value)}
        type="text"
      />
      <ForwardedComponentWithImperativeHandleChildren ref={ref} />
      <br />
      <button onClick={forceRerender}>FORCE RERENDER</button>
      <button onClick={() => ref.current?.click()}>CLICK USING REF</button>
    </div>
  )
}

const ForwardedComponentWithImperativeHandleChildren = forwardRef(
  (_props, ref: ForwardedRef<ImperativeHandleRef>) => {
    const [text, setText] = useState('Hello from ForwardedComponentWithImperativeHandle')
    const _ref = useRef<HTMLDivElement>(null)

    useImperativeHandle(
      ref,
      () => ({
        click: () => _ref.current?.click(),
        updateState: (value) => setText(value),
        textStateButWithUpperCase: text.toUpperCase(),
      }),
      [text]
    )

    return (
      <div ref={_ref} onClick={() => setText('clicked with ref help')}>
        {text}
      </div>
    )
  }
)
