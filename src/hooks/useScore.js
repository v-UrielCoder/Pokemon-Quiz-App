import { useState } from 'react'

export const useScore = () => {

  const [counter, setCounter] = useState(0)

  const incrementScore = () => {
    setCounter( counter + 1);
  }

  return{
    counter,
    incrementScore
  }
}
