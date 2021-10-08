import {
  forwardRef,
  useState,
  CSSProperties,
  useImperativeHandle,
  SetStateAction,
  Dispatch,
} from 'react'

export interface ImperativeComponentRef {
  setText: Dispatch<SetStateAction<string>>
  setColor: Dispatch<SetStateAction<CSSProperties['color']>>
}

export const ImperativeComponent = forwardRef<ImperativeComponentRef>((_, ref) => {
  const [text, setText] = useState('Hello')
  const [color, setColor] = useState<CSSProperties['color']>('black')

  useImperativeHandle(ref, () => ({
    setText,
    setColor,
  }))

  return (
    <div>
      <span style={{ color }}>{text}</span>
    </div>
  )
})
