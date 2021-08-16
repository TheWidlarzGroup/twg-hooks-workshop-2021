import React, { useRef } from 'react'

const nums = [1, 2, 3, 4, 5, 6, 7]

const OwnRef = ({ num }: { num: number }) => {
  const ref = useRef(0)

  const logRef = () => {
    console.log(ref.current)
  }

  const setRef = () => {
    ref.current = num
  }

  return (
    <div>
      <button onClick={setRef}>set ref: {num}</button>
      <button onClick={logRef}>log ref: {num}</button>
    </div>
  )
}

export const RefAsHook = () => {
  return (
    <div>
      {nums.map((el) => {
        return <OwnRef key={el} num={el} />
      })}
    </div>
  )
}
