import React, { ChangeEvent, useEffect } from 'react'
import { a, useSpring } from 'react-spring'
import { ackermann } from '../../hooks/utils/ackerman'

interface Props {
  onChange: F1<ChangeEvent<HTMLInputElement>>
}

export const HeavyInput = ({ onChange }: Props) => {
  useEffect(() => {
    ackermann(2, 1520)
  }, [onChange])

  useEffect(() => {
    // animacja styli...
  }, [onChange])

  return <input type="text" onChange={onChange} />
}

const FlickerOnPropsChange = (props: any) => {
  const animatedStyle = useSpring(() => ({}), [])

  return <a.div>{props.children}</a.div>
}
