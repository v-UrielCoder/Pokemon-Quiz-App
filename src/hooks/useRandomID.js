import { useState } from "react"
import { getRandomId } from "../helpers/getRandomId"

export const useRandomID = () => {

  const [id, setId] = useState(getRandomId())

  const changeID = () => {
    setId(getRandomId())
  }

  return {
    id,
    changeID
  }
}
