"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface AllPokemonData {
  name: string;
  url: string;
  id: number;
}

interface PokemonData {
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

interface ApiContextProps {
  allPokemonData: AllPokemonData[];
  eachPokemonData: PokemonData[];
  currentPage: number;
  desiredPokemonId: number;
  nextPage: () => void;
  previousPage: () => void;
  setDesiredPokemonId: (id: number) => void;
}

export const ApiContext = createContext<ApiContextProps>({
  allPokemonData: [],
  eachPokemonData: [],
  currentPage: 0,
  desiredPokemonId: 0,
  nextPage: () => {},
  previousPage: () => {},
  setDesiredPokemonId: () => {},
});

export const ApiContextProvider = ({ children }: { children: ReactNode }) => {
  const [allPokemonData, setAllPokemonData] = useState<AllPokemonData[]>([]);
  const [eachPokemonData, setEachPokemonData] = useState<PokemonData[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const itensPerPage = 24;

  const [desiredPokemonId, setDesiredPokemonId] = useState<number>(0);

  useEffect(() => {
    const fetchData = async (limit: number, offset: number) => {
      setAllPokemonData([])
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const dataJson = await data.json();

      setAllPokemonData(dataJson.results);
    };
    fetchData(itensPerPage, (currentPage * itensPerPage));
  }, [currentPage]);

  function previousPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage <= 46) {
      setCurrentPage(currentPage + 1);
      console.log(eachPokemonData)
    }
  }

  useEffect(() => {
    const fetchPokemonData = async () => {
      setEachPokemonData([]);
      for (let i = 0; i < allPokemonData.length; i++) {
        const pokemons = allPokemonData[i];
        const response = await fetch(pokemons.url);
        const pokeData = await response.json();
        setEachPokemonData((prevData) => [...prevData, pokeData]);
      }
    };

    if (allPokemonData.length > 0) {
      fetchPokemonData();
    }
  }, [allPokemonData]);

  return (
    <ApiContext.Provider
      value={{
        allPokemonData,
        eachPokemonData,
        currentPage,
        desiredPokemonId,   
        nextPage,
        previousPage,
        setDesiredPokemonId,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
