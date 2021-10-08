import React, { useRef, useState } from 'react'

interface Props {
  label: string
  onChange: (value: string) => void
  valid?: () => boolean
}

export const Input = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isInvalid, setIsInvalid] = useState(false)

  const onBlur = () => {
    if (props.valid !== undefined) {
      setIsInvalid(!props.valid())
    }
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem' }}
      onBlur={onBlur}
      ref={ref}>
      <span>{props.label}</span>
      <input type="text" onChange={(e) => props.onChange(e.target.value)} />
      {isInvalid && <span>INVALID FIELD</span>}
    </div>
  )
}
