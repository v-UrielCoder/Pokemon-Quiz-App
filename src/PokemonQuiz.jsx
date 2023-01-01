import React, { useState } from 'react'
import { InputName } from './components/InputName'
import { useFetch, useAttempts } from './hooks'

export const PokemonQuiz = () => {
  
  const {attempts,isGameOver, increment} = useAttempts( 5 );

  const {name, isLoading, img} = useFetch(`https://pokeapi.co/api/v2/pokemon/1/`)

  const onCheckInput = ( valueInput ) => {
    name.toLowerCase;
    console.log(valueInput);

    (name === valueInput)?console.log('Nombre correcto'):increment()
  }

  console.log(attempts);
  return (
    <div className='container-main'>
      <header>
        <h1>Pokemon Quiz</h1>
      </header>

      <div className='container-info-game'>
        <div className="container-image-pokemon">
          {
            isLoading ? 'Cargando...':<img src={img} alt={name} />
          }
        </div>

          {
            isGameOver
                      ? <h1>Perdiste</h1>
                      : <div className="container-controls-player">
                          <InputName onCheckInput={onCheckInput}/>
                        </div>
          }
        
      </div>

        
    </div>
  )
}
