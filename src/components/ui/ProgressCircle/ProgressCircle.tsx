import { useState, useEffect } from 'react'
import Circle from 'react-circle'

export const ProgressCircle = ({ progressRate }: { progressRate: number }) => {
  const [rate, setRate] = useState(0)

  /* eslint react-hooks/exhaustive-deps: 0 */
  useEffect(() => {
    setRate(progressRate)
  }, [])

  return (
    <Circle
      progress={rate}
      size='120px'
      lineWidth='50px'
      progressColor='#BA52AC'
      bgColor='rgb(255,255,255,0.5)'
      animationDuration='1s'
      roundedStroke={true}
      showPercentage={false}
    />
  )
}

export default ProgressCircle
