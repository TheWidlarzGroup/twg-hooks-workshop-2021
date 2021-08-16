import React from 'react'

const nums = [1, 2, 3, 4, 5, 6, 7]

const ref = { current: 0 }
const SharingRef = ({ num }: { num: number }) => {
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

export const RefAsConst = () => {
  return (
    <div>
      {nums.map((el) => {
        return <SharingRef key={el} num={el} />
      })}
    </div>
  )
}
