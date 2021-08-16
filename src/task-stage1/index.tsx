import React from 'react'
import { useForceRerenderInterval } from '../hooks/utils/useIntervalForceRerender'
import { HeavyFormWrapper } from './components/HeavyFormWrapper'
import { HeavyInput } from './components/HeavyInput'
import { useForm } from './hooks/task/useForm'

export const TaskStage1 = () => {
  useForceRerenderInterval(100)

  const { formRef, handlers } = useForm()

  return (
    <div>
      <HeavyFormWrapper>
        <HeavyInput onChange={handlers['name']} />
        <HeavyInput onChange={handlers['surname']} />
        <HeavyInput onChange={handlers['hobbies']} />
        <HeavyInput onChange={handlers['technologies']} />
        <HeavyInput onChange={handlers['attributes']} />
        <HeavyInput onChange={handlers['whyWantWorkWithUs']} />
      </HeavyFormWrapper>
    </div>
  )
}
