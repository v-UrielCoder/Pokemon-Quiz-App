import { Controls, ResetGame } from './components';
import { Score } from './components/Score';
import { useFetch, useAttempts, useRandomID, useScore } from './hooks'

export const PokemonQuiz = () => {
  
  const {attempts, isGameOver, increment, reset} = useAttempts( 5 );

  const {counter, incrementScore} = useScore()

  const {id, changeID } = useRandomID()

  const {name, isLoading, img} = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

  const onCheckInput = ( valueInput ) => {
    name.toLowerCase;
    (name === valueInput)? resolve(): increment()
  }

  const resetGame = () => {
    reset()
    changeID()
  }

  const resolve = () => {
    changeID()
    incrementScore()
  }


  return (
    
    <div className='container-main'>
      <div className='container-aux'>
        <header>
          <h1 id='title'>Pokemon Quiz</h1>
        </header>

        <Score counter={counter} increase={incrementScore}/>

        <div className='container-info-game'>
          <div className="container-image-pokemon">
            {
              isLoading ? <p id='loading'>Cargando Pokemon...</p>
                        :<img id='pokemon-img' src={img} alt={name} />
            }
          </div>

          <div className="container-controls">
            {
              isGameOver
                      ? <ResetGame name={name} reset={resetGame} />
                      : <Controls onCheckInput={onCheckInput} attempts={attempts}/>
            }
          </div>
          
        </div>
      </div>

    </div>
  )
}
