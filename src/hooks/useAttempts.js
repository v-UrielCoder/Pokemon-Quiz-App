import { useState } from "react"

export const useAttempts = ( maxAttemps ) => {
  
  const [controlAttempts, setControlAttempts] = useState({
    attempts: 0,
    isGameOver: false
  })

  const { attempts, isGameOver} = controlAttempts;

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

  return {
    ...controlAttempts,
    increment
  }
}
