'use client'

import Wrapper from "@/styles/Wrapper.style";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Card from "@/components/Card";
import { useContext } from "react";
import { ApiContext } from "@/context/ContextApi";

export default function Home() {
  const { allPokemonData } = useContext(ApiContext)

  console.log(allPokemonData)

  return (
    <Wrapper>
      <GlobalStyle />
      <h2>Pokémons</h2>
      {allPokemonData.map((pokemon, index) => (
        
        <Card key={index} name={pokemon.name} />
      ))}
    </Wrapper>
  )
}
