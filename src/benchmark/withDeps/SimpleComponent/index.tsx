import React from 'react'
import { BenchmarkRenderer } from '../../BenchmarkRenderer'
import { SimpleComponentCallback } from './withCallback'
import { SimpleComponent } from './withoutCallback'

export const SimpleComponentBenchmarkCallbackDeps = () => {
  return <BenchmarkRenderer ComponentToRender={SimpleComponentCallback} />
}

export const SimpleComponentBenchmarkDeps = () => {
  return <BenchmarkRenderer ComponentToRender={SimpleComponent} />
}
