import React from 'react'
import { useForceRerenderInterval } from '../hooks/utils/useIntervalForceRerender'

export const TaskStage1 = () => {
  useForceRerenderInterval(100)

  return <div></div>
}
