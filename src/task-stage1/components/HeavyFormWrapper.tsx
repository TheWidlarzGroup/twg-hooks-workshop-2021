import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const HeavyFormWrapper = ({ children }: Props) => {
  return <form>{children}</form>
}
