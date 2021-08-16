import { BenchmarkRenderer } from '../../BenchmarkRenderer'
import { ComplexComponentCallback } from './withCallback'
import { ComplexComponent } from './withoutCallback'

export const ComplexComponentBenchmarkCallbackDeps = () => {
  return <BenchmarkRenderer ComponentToRender={ComplexComponentCallback} />
}

export const ComplexComponentBenchmarkDeps = () => {
  return <BenchmarkRenderer ComponentToRender={ComplexComponent} />
}
