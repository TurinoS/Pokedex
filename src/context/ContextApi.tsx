'use client'

import { ReactNode, createContext, useEffect, useState } from "react";

interface AllPokemonData {
    name: string
    url: string
}

interface ApiContextProps {
    allPokemonData: AllPokemonData[];
}

export const ApiContext = createContext<ApiContextProps>({ 
    allPokemonData: [],
});

export const ApiContextProvider = ({ children }: { children: ReactNode }) => {
    const [allPokemonData, setAllPokemonData] = useState<AllPokemonData[]>([])
    
    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://pokeapi.co/api/v2/pokemon");
          const dataJson = await data.json();
          setAllPokemonData(dataJson.results);
        };
        fetchData();

    }, [setAllPokemonData]);
    
    return( 
        <ApiContext.Provider value={{ allPokemonData }}>
            {children}
        </ApiContext.Provider>
    )
}