import React from 'react'
import { useForceRerenderInterval } from '../hooks/utils/useIntervalForceRerender'
import { HeavyInput } from './components/HeavyInput'
import { RainbowWiggle } from './components/RainbowWiggle'

import './styles/wiggle.css'

export const TaskStage1 = () => {
  useForceRerenderInterval(2000)

  return (
    <div>
      <RainbowWiggle>
        <HeavyInput onChange={() => {}} />
      </RainbowWiggle>
    </div>
  )
}
