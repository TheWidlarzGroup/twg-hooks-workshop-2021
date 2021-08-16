import React from 'react'

export const SimpleComponent = () => {
  const func = () => console.log('hello world')

  return <div onClick={func}>SimpleComponent</div>
}
