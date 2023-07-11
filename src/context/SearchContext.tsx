"use client";

import { ReactNode, createContext, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  species: {
    name: string;
  };
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
}

interface SearchContextValue {
  searchedPokemon: string | undefined;
  setSearchedPokemon: React.Dispatch<React.SetStateAction<string | undefined>>;
  takePokemon: (e: React.FormEvent) => void;
  pokemonToTake: Pokemon | undefined;
  fetchFailed: boolean;
  desiredPokemonId: number | null;
  setDesiredPokemonId: (id: number | null) => void;
}

export const SearchContext = createContext<SearchContextValue>({
  searchedPokemon: undefined,
  setSearchedPokemon: () => {},
  takePokemon: () => {},
  pokemonToTake: undefined,
  fetchFailed: false,
  desiredPokemonId: null,
  setDesiredPokemonId: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchedPokemon, setSearchedPokemon] = useState<string | undefined>("");
  const [pokemonToTake, setPokemonToTake] = useState<Pokemon | undefined>(undefined);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [desiredPokemonId, setDesiredPokemonId] = useState<number | null>(null);

  const fetchData = async (searchedPokemon: string) => {
    const lowercasePokemon = searchedPokemon.toLowerCase();
    try {
        const searchData = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${lowercasePokemon}`
        );
        const searchDataJson = await searchData.json();
        setPokemonToTake(searchDataJson as Pokemon);
      } catch (error) {
        console.error("Erro ao buscar os dados do Pokémon:", error);
        setFetchFailed(true);
      }
    };

  function takePokemon(e: React.FormEvent) {
    setFetchFailed(false);
    e.preventDefault();
    if (searchedPokemon) {
      fetchData(searchedPokemon);
    } else {
        handleFetchError()
    }
  }

  const handleFetchError = () => {
    setFetchFailed(true);
  };

  return (
    <SearchContext.Provider
      value={{
        searchedPokemon,
        pokemonToTake,
        fetchFailed,
        desiredPokemonId,
        setDesiredPokemonId,
        setSearchedPokemon,
        takePokemon,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
