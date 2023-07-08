'use client'

import { ReactNode, createContext, useEffect, useState } from "react";

interface AllPokemonData {
    name: string
    url: string
    id: number
}

interface PokemonData {
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
        }
    }[];
    types: {
        type: {
            name: string;
        }
    }[];
    weight: number;
    height: number
}

interface ApiContextProps {
    allPokemonData: AllPokemonData[];
    eachPokemonData: PokemonData[];
}

export const ApiContext = createContext<ApiContextProps>({ 
    allPokemonData: [],
    eachPokemonData: [],
});

export const ApiContextProvider = ({ children }: { children: ReactNode }) => {
    const [allPokemonData, setAllPokemonData] = useState<AllPokemonData[]>([])
    const [eachPokemonData, setEachPokemonData] = useState<PokemonData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
          const dataJson = await data.json();

          dataJson.results.forEach((item: AllPokemonData, index: number) => {
            item.id = index + 1;
          })

          setAllPokemonData(dataJson.results);
        };
        fetchData();

    }, [setAllPokemonData]);

    useEffect(() => {
        const fetchPokemonData = async () => {
          for (let i = 0; i < allPokemonData.length; i++) {
            const pokemon = allPokemonData[i];
            const response = await fetch(pokemon.url);
            const pokeData = await response.json();
            setEachPokemonData((prevData) => [...prevData, pokeData]);
          }
        };
    
        if (allPokemonData.length > 0) {
          fetchPokemonData();
        }
    }, [allPokemonData]);
    
    return( 
        <ApiContext.Provider value={{ allPokemonData, eachPokemonData }}>
            {children}
        </ApiContext.Provider>
    )
}