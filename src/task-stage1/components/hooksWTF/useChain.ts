import { useEffect, useRef } from 'react'

export const useChain = (...args: F0[]) => {
  useEffect(() => {
    args.forEach((arg) => arg())
  })
}
