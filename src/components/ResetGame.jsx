import React from 'react'

export const ResetGame = ({ name, reset }) => {
  return (
    <div className='container-message-lose'>
      <h2 className='message-lose'>Perdiste :( el nombre del pokemon era {name}</h2>

      <button onClick={reset}>Volver a jugar</button>
    </div>
  )
}
