import React, { ForwardedRef, forwardRef, Ref } from 'react'

interface CustomComponentWithRefProps {
  ref: Ref<HTMLDivElement>
}

export const CustomComponentWithRef = ({ ref }: CustomComponentWithRefProps) => {
  return <div ref={ref}>HEllO from CustomComponentWithRef</div>
}

interface CustomComponentWithRefButRenamedProps {
  definitelyNotRef: Ref<HTMLDivElement>
}

export const CustomComponentWithRefButRenamed = ({
  definitelyNotRef,
}: CustomComponentWithRefButRenamedProps) => {
  return <div ref={definitelyNotRef}>HEllO from CustomComponentWithRef</div>
}

export const ForwardedComponent = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return <div ref={ref}>HELLO from ForwardedCustomComponent</div>
})
