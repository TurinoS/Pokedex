'use client'

import Wrapper from "@/styles/Wrapper.style";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Card from "@/components/Card";
import { useContext } from "react";
import { ApiContext } from "@/context/ContextApi";
import StyledHome from "@/styles/Home.style";

export default function Home() {
  const { eachPokemonData } = useContext(ApiContext)

  return (
    <Wrapper>
      <GlobalStyle />
      <StyledHome>
      {eachPokemonData.map((pokemon, index) => (
        
        <Card key={index} name={pokemon.name} sprite={pokemon.sprites.front_default} types={pokemon.types} />
      ))}
      </StyledHome>
    </Wrapper>
  )
}
