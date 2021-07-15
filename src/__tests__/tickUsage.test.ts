import { tickUsage } from '../hooks/memo/MemoizedHeavyCalculationFunction'

it('should increment selected field in object', () => {
  let counter = {}

  counter = tickUsage(counter, 0)
  expect(counter).toEqual({ 0: 1 })

  counter = tickUsage(counter, 0)
  expect(counter).toEqual({ 0: 2 })

  counter = tickUsage(counter, 1)
  expect(counter).toEqual({ 0: 2, 1: 1 })
})
