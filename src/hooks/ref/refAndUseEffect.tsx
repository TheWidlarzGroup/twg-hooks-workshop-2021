import React, { useEffect, useRef } from 'react'
import useForceRerender from '../utils/useForceRerender'
import useCounter from '../utils/useCounter'
import { useFakeRef } from '../fakeHooks/useFakeRef'

export const RefAndUseEffect = ({ fakeRef }: { fakeRef?: boolean }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const counterRef = fakeRef ? useFakeRef(0) : useRef(0)
  const { forceRerenderWithCallback } = useForceRerender()
  const [withDepsCounter, incrementCounterWithDeps] = useCounter(0)
  const [withCurrentInDepsCounter, incrementCounterCurrentInWithDeps] = useCounter(0)

  useEffect(() => {
    console.log('without deps', counterRef.current)
  }, [])

  useEffect(() => {
    console.log('with deps', counterRef.current)
    incrementCounterWithDeps()
  }, [counterRef, incrementCounterWithDeps])

  useEffect(() => {
    console.log('with .current as dep', counterRef.current)
    incrementCounterCurrentInWithDeps()
  }, [counterRef.current, incrementCounterCurrentInWithDeps, incrementCounterWithDeps])

  return (
    <div>
      <div>counterRef.current: {counterRef.current}</div>
      <div>withDepsCounter: {withDepsCounter}</div>
      <div>withCurrentInDepsCounter: {withCurrentInDepsCounter}</div>

      <button
        onClick={() => {
          forceRerenderWithCallback(() => (counterRef.current = counterRef.current + 1))
        }}>
        FORCE RERENDER
      </button>
    </div>
  )
}
