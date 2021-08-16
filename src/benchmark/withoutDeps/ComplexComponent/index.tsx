import { BenchmarkRenderer } from "../../BenchmarkRenderer"
import {ComplexComponentCallback} from "./withCallback";
import { ComplexComponent } from "./withoutCallback";

export const ComplexComponentBenchmarkCallback = () => {
  return <BenchmarkRenderer ComponentToRender={ComplexComponentCallback} />
}

export const ComplexComponentBenchmark = () => {
  return <BenchmarkRenderer ComponentToRender={ComplexComponent} />
}
