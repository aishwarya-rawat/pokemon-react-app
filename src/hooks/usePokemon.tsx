import { useEffect, useState } from 'react';

type Pokemon = {
  name: string;
  abilities: Abilities[];
  sprites: {
    front_default: string;
  }
}

type Abilities = {
  ability: {
    name: string;
  }
}


export const usePokemon = (search: string) => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any>(null);
  const fetchPokemon = async () => {
    try {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      const pokemonDetails = await pokemon.json();
      setPokemonData(pokemonDetails);
      setIsError(false);
    } catch (e) {
      setPokemonData(null);
      setIsError(true);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //make api call
    if (search) {
      setLoading(true);
      setIsError(false);
      fetchPokemon();
    }
  }, [search]);

  return { pokemonData, isLoading, isError, error };
};
