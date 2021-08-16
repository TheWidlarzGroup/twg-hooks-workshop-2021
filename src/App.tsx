import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
    CallbackCurring,
    CallbackCurring2,
    CallbackCurring3,
    CallbackCurring4,
    CallbackCurring5,
    CallbackCurring6,
} from './hooks/callback/limitations/curring'
import {OnlyFunctions} from './hooks/callback/limitations/onlyFunctions'
import {ForwardedComponentWithImperativeHandle} from './hooks/ref/ForwardedComponentWithImperativeHandle'
import {RefAndUseEffect} from './hooks/ref/refAndUseEffect'
import {WithoutForwardRef} from './hooks/ref/withoutForwardRef'
import {WithoutForwardRefButRenamed} from './hooks/ref/CustomComponentWithRefButRenamed'
import {WithMemo, WithoutMemo, WithoutMemoButUserIsOutsideComponent,} from './hooks/memo/ReferenceChangeExamples'
import {MemoizedHeavyCalculation} from './hooks/memo/MemoizedHeavyCalculation'
import {TaskStage1} from './task-stage1'
import {ComponentsWithCallbacks, ComponentsWithoutCallbacks,} from './hooks/callback/aLotOfCallbacks'
import {RefAsConst} from './hooks/ref/withoutHook'
import {RefAsHook} from './hooks/ref/refWithHook'
import {SimpleComponentBenchmark, SimpleComponentBenchmarkCallback,} from './benchmark/withoutDeps/SimpleComponent'
import {ComplexComponentBenchmark, ComplexComponentBenchmarkCallback,} from './benchmark/withoutDeps/ComplexComponent'
import {SimpleComponentBenchmarkCallbackDeps, SimpleComponentBenchmarkDeps,} from './benchmark/withDeps/SimpleComponent'
import {
    ComplexComponentBenchmarkCallbackDeps,
    ComplexComponentBenchmarkDeps,
} from './benchmark/withDeps/ComplexComponent'

function App() {
  return (
    <Router>
      <Route exact path={'/'} render={() => <div>home</div>} />
      <Route path={'/callback'} render={() => <CallbackCurring />} />
      <Route path={'/callback2'} render={() => <CallbackCurring2 />} />
      <Route path={'/callback3'} render={() => <CallbackCurring3 />} />
      <Route path={'/callback4'} render={() => <CallbackCurring4 />} />
      <Route path={'/callback5'} render={() => <CallbackCurring5 />} />
      <Route path={'/callback6'} render={() => <CallbackCurring6 />} />
      <Route path={'/callbackfail'} render={() => <OnlyFunctions />} />

      <Route path={'/componentsWithCallbacks'} render={() => <ComponentsWithCallbacks />} />
      <Route path={'/componentsWithoutCallbacks'} render={() => <ComponentsWithoutCallbacks />} />

      <Route path={'/refComponentWithoutForwardRef'} render={() => <WithoutForwardRef />} />
      <Route
        path={'/refComponentWithoutForwardRefRenamed'}
        render={() => <WithoutForwardRefButRenamed />}
      />

      <Route path={'/refComponentWithForwardRef'} render={() => <WithoutForwardRef />} />

      <Route
        path={'/forwardedComponentWithImperativeHandle'}
        render={() => <ForwardedComponentWithImperativeHandle />}
      />

      <Route path={'/refAsConst'} render={() => <RefAsConst />} />
      <Route path={'/refAsHook'} render={() => <RefAsHook />} />

      <Route path={'/refAndUseEffect'} render={() => <RefAndUseEffect />} />
      <Route path={'/refAndUseEffectFake'} render={() => <RefAndUseEffect fakeRef />} />

      <Route path={'/memoWithout'} render={() => <WithoutMemo />} />
      <Route
        path={'/memoWithoutButUserOutside'}
        render={() => <WithoutMemoButUserIsOutsideComponent />}
      />
      <Route path={'/memoWith'} render={() => <WithMemo />} />
      <Route path={'/memoizedHeavyCalculation'} render={() => <MemoizedHeavyCalculation />} />

      <Route path={'/effect'} render={() => <div>effect</div>} />
      <Route path={'/state'} render={() => <div>state</div>} />
      <Route path={'/task'} render={() => <TaskStage1 />} />

      <Route path={'/benchmark-simple-without'} render={() => <SimpleComponentBenchmark />} />
      <Route path={'/benchmark-simple-with'} render={() => <SimpleComponentBenchmarkCallback />} />

      <Route path={'/benchmark-complex-without'} render={() => <ComplexComponentBenchmark />} />
      <Route
        path={'/benchmark-complex-with'}
        render={() => <ComplexComponentBenchmarkCallback />}
      />

      <Route
        path={'/benchmark-simple-without-deps'}
        render={() => <SimpleComponentBenchmarkDeps />}
      />
      <Route
        path={'/benchmark-simple-with-deps'}
        render={() => <SimpleComponentBenchmarkCallbackDeps />}
      />

      <Route
        path={'/benchmark-complex-without-deps'}
        render={() => <ComplexComponentBenchmarkDeps />}
      />
      <Route
        path={'/benchmark-complex-with-deps'}
        render={() => <ComplexComponentBenchmarkCallbackDeps />}
      />
    </Router>
  )
}

export default App
