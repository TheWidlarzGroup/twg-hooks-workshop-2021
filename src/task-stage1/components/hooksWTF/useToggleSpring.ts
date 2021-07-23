import { useEffect, useRef } from 'react'
import { useSpring, UseSpringProps } from 'react-spring'

export const useToggleSpring = (springConfig: UseSpringProps) => {
  const configRef = useRef(springConfig)

  useEffect(() => {
    configRef.current = {
      ...configRef.current,
      from: configRef.current.to,
      to: configRef.current.from,
    }
  })

  return useSpring(configRef.current)
}
