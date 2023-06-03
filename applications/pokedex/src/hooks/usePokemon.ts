import type {Pokemon} from '../types';

import {useState, useEffect} from 'react';
import {pokemonApi} from '../api/pokemonApi';

interface PokemonState {
  pokemon?: Pokemon;
  isLoading: boolean;
}

export default function usePokemon(id: string) {
  const [state, setState] = useState<PokemonState>({
    pokemon: undefined,
    isLoading: true,
  });

  const getPokemonDetail = async () => {
    const requestUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await pokemonApi.get<Pokemon>(requestUrl);

    setState({pokemon: resp.data, isLoading: false});
  };

  useEffect(() => {
    getPokemonDetail();
  }, []);

  return {...state};
}
