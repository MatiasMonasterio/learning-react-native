import type {PokemonsResponse, Pokemon, SimplePokemon} from '../types';

import {useState, useEffect, useRef} from 'react';
import {pokemonApi} from '../api/pokemonApi';

export default function usePokemonPagination() {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);

  const loadPokemons = async () => {
    setIsLoading(true);

    const resp = await pokemonApi.get<PokemonsResponse>(nextPageUrl.current);

    nextPageUrl.current = resp.data.next;

    setPokemons(curr => [
      ...curr,
      ...resp.data.results.map(simplePokemonMapper),
    ]);

    setIsLoading(false);
  };

  const simplePokemonMapper = (pokemon: Pokemon): SimplePokemon => {
    const urlSplitter = pokemon.url.split('/');
    const pokemonId = urlSplitter[urlSplitter.length - 2];
    const pokeminPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

    return {
      ...pokemon,
      picture: pokeminPicture,
      id: pokemonId,
    };
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isLoading,
    pokemons,
    loadPokemons,
  };
}
