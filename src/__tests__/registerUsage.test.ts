import {registerUsage} from "../utils/registerUsage";

it('should increment selected field in object', () => {
  let counter = {}

  counter = registerUsage(counter, 0)
  expect(counter).toEqual({ 0: 1 })

  counter = registerUsage(counter, 0)
  expect(counter).toEqual({ 0: 2 })

  counter = registerUsage(counter, 1)
  expect(counter).toEqual({ 0: 2, 1: 1 })
})
