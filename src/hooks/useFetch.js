import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

  const [dataPokemon, setDataPokemon] = useState({
    name: '',
    img: '',
    isLoading: true
  })


  const getInfo = async() => {

    setDataPokemon({
      ...dataPokemon,
      isLoading: true
    })

    const resp = await fetch( url )
    const {name, sprites} = await resp.json()
    const { front_default } = sprites;

    setInfo( name, front_default )
  }

  const setInfo = (name, img) => {
    setDataPokemon({
      name,
      img,
      isLoading: false
    })
  }

  useEffect(() => {
    
    getInfo()
  }, [ url ])
  
  
  return{
    name: dataPokemon.name,
    img: dataPokemon.img,
    isLoading: dataPokemon.isLoading
  }
}

