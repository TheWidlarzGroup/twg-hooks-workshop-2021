import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  CallbackCurring,
  CallbackCurring2,
  CallbackCurring3,
  CallbackCurring4,
  CallbackCurring5,
} from './hooks/callback/limitations/curring'
import { OnlyFunctions } from './hooks/callback/limitations/onlyFunctions'
import { ForwardedComponentWithImperativeHandleExample } from './hooks/ref/ForwardedComponentWithImperativeHandle'

function App() {
  return (
    <Router>
      <Route exact path={'/'} render={() => <div>home</div>} />

      <Route path={'/callback'} render={() => <CallbackCurring />} />
      <Route path={'/callback2'} render={() => <CallbackCurring2 />} />
      <Route path={'/callback3'} render={() => <CallbackCurring3 />} />
      <Route path={'/callback4'} render={() => <CallbackCurring4 />} />
      <Route path={'/callback5'} render={() => <CallbackCurring5 />} />
      <Route path={'/callbackfail'} render={() => <OnlyFunctions />} />

      <Route path={'/ref'} render={() => <ForwardedComponentWithImperativeHandleExample />} />

      <Route path={'/memo'} render={() => <div>memo</div>} />
      <Route path={'/effect'} render={() => <div>effect</div>} />
      <Route path={'/state'} render={() => <div>state</div>} />
    </Router>
  )
}

export default App
