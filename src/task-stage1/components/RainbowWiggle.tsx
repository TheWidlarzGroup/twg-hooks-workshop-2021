import { useRef } from 'react'
import { a } from 'react-spring'
import { useQueue, useToggleSpring } from './hooksWTF'

export const RainbowWiggle = (props: any) => {
  const ref = useRef<HTMLDivElement>(null)

  const rainbowSpring = useToggleSpring({
    from: {
      display: 'inline-flex',
      padding: 0,
      backgroundColor: 'rgba(255,0,0)',
      outline: '0px solid red',
      outlineOffset: '-10px',
      border: '0px solid red',
    },
    to: {
      display: 'inline-flex',
      padding: 10,
      backgroundColor: 'rgba(0,255,0)',
      outline: '3px dotted yellow',
      outlineOffset: '-10px',
      border: '3px solid red',
      borderRadius: 5,
    },
    config: {
      duration: 100,
    },
  })

  useQueue(
    () => ref.current?.classList.add('wiggle'),
    () => ref.current?.classList.remove('wiggle')
  )

  return (
    <a.div ref={ref} style={rainbowSpring}>
      {props.children}
    </a.div>
  )
}
