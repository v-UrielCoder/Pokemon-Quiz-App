import { useState } from "react"

export const getRandomId = () => {
  const [idsUsed, setIdsUsed] = useState([])

  const totalPokemones = 905;

  let id = Math.floor(Math.random() * totalPokemones)

  while (idsUsed.includes(id)) {
    id = Math.floor(Math.random() * totalPokemones)
  }

  setIdsUsed( [id, ...idsUsed]);

  return id;
}
