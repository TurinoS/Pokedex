'use client'

import Wrapper from "@/styles/Wrapper.style";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Card from "@/components/Card";
import { useContext, useState } from "react";
import { ApiContext } from "@/context/ContextApi";
import StyledHome from "@/styles/Home.style";
import { ModalContext } from "@/context/ModalContext";
import Modal from "@/components/Modal";

export default function Home() {
  const { eachPokemonData } = useContext(ApiContext)
  const { modalOpen } = useContext(ModalContext)

  const [desiredPokemonId, setDesiredPokemonId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setDesiredPokemonId(id - 1);
  };

  const handleCardModalClick = () => {};

  return(
    <Wrapper>
      <GlobalStyle />
      <StyledHome>
        {modalOpen && desiredPokemonId !== null && (
          <Modal id={desiredPokemonId} onClick={handleCardModalClick} />
        )}
        {eachPokemonData.map((pokemon, index) => (
          <Card 
            id={index} 
            key={index} 
            name={pokemon.name} 
            sprite={pokemon.sprites.front_default} 
            types={pokemon.types} 
            onClick={() => handleCardClick(pokemon.id)} />
        ))}
      </StyledHome>
    </Wrapper>
  )
}
