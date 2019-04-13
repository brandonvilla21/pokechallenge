import React, { useEffect, useState, useRef } from "react";
import customAxios from "../api/axios";
import axios from 'axios'
import Pokemon from "../components/Pokemon";
import Spinner from "../components/Spinner";
import { makeStyles } from "@material-ui/styles";
import { timer } from '../utils'
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
}));

interface PokemonAPI {
  name: string
  url: string
}

const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState<PokemonAPI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const nextLink = useRef('');
  const classes = useStyles();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await customAxios.get("/pokemon");
        setPokemons(response.data.results);
        nextLink.current = response.data.next
      } catch (err) {
        console.log(err)
      }
    };
    fetchPokemon();
  }, []);

  
  useEffect(() => {
    document.addEventListener('scroll', calculateInfiniteScroll)
    return () => {
      document.removeEventListener('scroll', calculateInfiniteScroll)
    }
  }, [])

  const calculateNextPokemons = async () => {
    if (!nextLink.current) {
      return;
    }

    try {
      await timer(500)
      const response = await axios.get(nextLink.current);
      const { results } = response.data
      nextLink.current = response.data.next
      setPokemons((currentPokemons) => {
        return [
          ...currentPokemons,
          ...results
        ]
      })
    } catch(err) {
      console.log('err!')
    } finally {
      setIsLoading(false)
    }
  }

  const calculateInfiniteScroll = () => {
    const { scrollTop, clientHeight, scrollHeight} = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight -20){
      setIsLoading(true)
      calculateNextPokemons()
    }
  }

  const renderPokemons = () => {
    return pokemons.map((pokemon: any, index: number) => {
      return <Pokemon key={index} name={pokemon.name} url={pokemon.url}  />
    })
  }

  return (
    <div>
      <div className={classes.root}>
        {renderPokemons()}
      </div>
      <Spinner loading={isLoading}/>
    </div>
  );
};

export default withRouter(PokemonGrid);
