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
      <header>
        <h1>Pokemon Quiz</h1>
      </header>

      <Score counter={counter} increase={incrementScore}/>

      <div className='container-info-game'>
        <div className="container-image-pokemon">
          {
            isLoading ? <p>Cargando Pokemon...</p>
                      :<img src={img} alt={name} />
          }
        </div>

          {
            isGameOver
                    ? <ResetGame name={name} reset={resetGame} />
                    : <Controls onCheckInput={onCheckInput} attempts={attempts}/>
          }
        
      </div>
    </div>
  )
}
