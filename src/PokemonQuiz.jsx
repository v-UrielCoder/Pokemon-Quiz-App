import React, { useState } from 'react'
import { useFetch } from './hooks/useFetch'

export const PokemonQuiz = () => {
  
  const [dataPokemon, setDataPokemon] = useState({})
  const {name, isLoading, img} = useFetch(`https://pokeapi.co/api/v2/pokemon/1/`)

  return (
    <div className='container-main'>
      <header>
        <h1>Pokemon Quiz</h1>
      </header>

      <div className="container-image-pokemon">

      </div>

      <div className="container-controls-player">

      </div>
    </div>
  )
}
