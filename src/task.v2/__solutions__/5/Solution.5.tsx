import React, { useRef } from 'react'
import { ImperativeComponent, ImperativeComponentRef } from './ImperativeComponent'
import { useForm } from '../3/useForm'

export const Solution5 = () => {
  const { updateField } = useForm({ initialValue: { text: '' }, debounceTime: 1500 })

  const ref = useRef<ImperativeComponentRef>(null)

  return (
    <div>
      <div>
        <button onClick={() => ref.current?.setColor('red')}>RED</button>
        <button onClick={() => ref.current?.setColor('blue')}>BLUE</button>
        <button onClick={() => ref.current?.setColor('black')}>BLACK</button>
        <button onClick={() => ref.current?.setColor('green')}>GREEN</button>
      </div>

      <input
        type="text"
        onChange={(e) =>
          updateField('text', e.target.value, ({ text }) => {
            ref.current?.setText(text)
          })
        }
      />
      <ImperativeComponent ref={ref} />
    </div>
  )
}
