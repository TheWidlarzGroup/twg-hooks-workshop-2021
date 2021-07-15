import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  CallbackCurring,
  CallbackCurring2,
  CallbackCurring3,
  CallbackCurring4,
  CallbackCurring5,
  CallbackCurring6,
} from './hooks/callback/limitations/curring'
import { OnlyFunctions } from './hooks/callback/limitations/onlyFunctions'
import { ForwardedComponentWithImperativeHandle } from './hooks/ref/ForwardedComponentWithImperativeHandle'
import { RefAndUseEffect } from './hooks/ref/refAndUseEffect'
import { WithoutForwardRef } from './hooks/ref/withoutForwardRef'
import { WithoutForwardRefButRenamed } from './hooks/ref/CustomComponentWithRefButRenamed'
import {
  WithMemo,
  WithoutMemo,
  WithoutMemoButUserIsOutsideComponent,
} from './hooks/memo/ReferenceChangeExamples'
import { MemoizedHeavyCalculationFunction } from './hooks/memo/MemoizedHeavyCalculationFunction'

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

      <Route path={'/refAndUseEffect'} render={() => <RefAndUseEffect />} />
      <Route path={'/refAndUseEffectFake'} render={() => <RefAndUseEffect fakeRef />} />

      <Route path={'/memoWithout'} render={() => <WithoutMemo />} />
      <Route
        path={'/memoWithoutButUserOutside'}
        render={() => <WithoutMemoButUserIsOutsideComponent />}
      />
      <Route path={'/memoWith'} render={() => <WithMemo />} />
      <Route
        path={'/memoizedHeavyCalculationFunction'}
        render={() => <MemoizedHeavyCalculationFunction />}
      />

      <Route path={'/effect'} render={() => <div>effect</div>} />
      <Route path={'/state'} render={() => <div>state</div>} />
    </Router>
  )
}

export default App
