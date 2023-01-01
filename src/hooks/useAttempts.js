import { useState } from "react"

export const useAttempts = ( maxAttemps = 5 ) => {
  
  const [controlAttempts, setControlAttempts] = useState({
    attempts: 0,
    isFameOver: false
  })

  const { attempts } = controlAttempts;

  const increment = () => {
    (attempts < maxAttemps)
              ? setControlAttempts({
                  ...controlAttempts,
                  attempts: attempts + 1
                })
              :
                setControlAttempts({
                  ...controlAttempts,
                  isGameOver: true
                })
  }

  const reset = () => {
    setControlAttempts({
      attempts: 0,
      isGameOver: false
    })
  }

  return {
    ...controlAttempts,
    increment,
    reset
  }
}
