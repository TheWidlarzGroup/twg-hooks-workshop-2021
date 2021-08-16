import React, { useCallback } from 'react'

export const SimpleComponentCallback = () => {
  const func = useCallback(() => console.log('hello world'), [])

  return <div onClick={func}>SimpleComponentCallback</div>
}
