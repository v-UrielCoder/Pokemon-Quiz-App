import { InputName } from "./InputName"

export const Controls = ({onCheckInput, attempts}) => {
  return (
    <div className="container-controls-player">
      <InputName onCheckInput={onCheckInput}/>
      <p>llevas {attempts} intentos</p>
    </div>
  )
}
