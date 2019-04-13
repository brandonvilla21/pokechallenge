import axios from 'axios'
import { BASE_URL } from './constants';

export const getPokemon = (name: string) => {
  return new Promise(async(resolve, reject) => {
    try {
      const response = await axios.get(`${BASE_URL}/pokemon/${name}`)
      resolve(response.data)
    } catch(err) {
      reject(err)
    }
  })
}

export const getPokemons = (url: string) => {
  return new Promise(async(resolve, reject) => {
    try {
      const response = await axios.get(url)
      resolve(response.data)
    } catch(err) {
      reject(err)
    }
  })
}

