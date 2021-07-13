import React, { useRef } from 'react'
import { CustomComponentWithRef } from './BasicRefComponents'

export const WithoutForwardRef = () => {
  const ref = useRef<HTMLDivElement>(null)

  return <CustomComponentWithRef ref={ref} />
}
