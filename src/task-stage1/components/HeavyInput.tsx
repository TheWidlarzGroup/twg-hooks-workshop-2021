import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'

export const HeavyInput = ({ onChange }) => {
  useEffect(() => {
    for (let i = 0; i < 50_000; i++) {}
  }, [onChange])

  useEffect(() => {
    // animacja styli...
  }, [onChange])

  return <input type="text" onChange={onChange} />
}

const FlickerOnPropsChange = (props) => {
  const animatedStyle =  useSpring(()=>{




  },[])

  return
  ;<a.div>{props.children}</a.div>
}
