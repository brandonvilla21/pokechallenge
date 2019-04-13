import { useState, useEffect } from 'react'
import { getPokemon } from '../api'

const usePokemon = (name: string) => {
  const [data, setData] = useState<any>({})
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await getPokemon(name);
        setData(data)
      } catch (err) {
        console.log("error!");
      }
    };
    fetchPokemonData();
  }, [])

  return [
    data,
    setData
  ]
}

export default usePokemon