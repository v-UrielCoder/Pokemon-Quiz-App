import { useState } from "react"

export const InputName = ({ onCheckInput }) => {
  const [value, setValue] = useState('')
  
  return (
    <>
      <input 
        type="text"
        placeholder="Ingresa el nombre del pokemon"
        autoComplete="off"
        value={value}
        onChange = { (event) => setValue( event.target.value)}
        id="input-resp"
      />

      <button id="button-check" onClick={ () => onCheckInput( value.toLowerCase()) }>Verificar</button>
    </>
  )
}
