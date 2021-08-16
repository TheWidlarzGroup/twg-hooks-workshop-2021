import React from 'react'
import { BenchmarkRenderer } from '../../BenchmarkRenderer'
import { SimpleComponentCallback } from './withCallback'
import { SimpleComponent } from './withoutCallback'

export const SimpleComponentBenchmarkCallback = () => {
  return <BenchmarkRenderer ComponentToRender={SimpleComponentCallback} />
}

export const SimpleComponentBenchmark = () => {
  return <BenchmarkRenderer ComponentToRender={SimpleComponent} />
}
