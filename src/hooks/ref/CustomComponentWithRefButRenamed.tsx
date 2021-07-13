import React, { useRef } from 'react'
import { CustomComponentWithRefButRenamed } from './BasicRefComponents'

export const WithoutForwardRefButRenamed = () => {
  const ref = useRef<HTMLDivElement>(null)

  return <CustomComponentWithRefButRenamed definitelyNotRef={ref} />
}
