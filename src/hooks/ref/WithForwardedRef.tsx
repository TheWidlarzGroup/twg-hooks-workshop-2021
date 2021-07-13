import { useRef } from 'react'
import { ForwardedComponent } from './BasicRefComponents'

export const WithForwardedRef = () => {
  const ref = useRef<HTMLDivElement>(null)

  return <ForwardedComponent ref={ref} />
}
