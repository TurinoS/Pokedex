'use client'

import Wrapper from "@/styles/Wrapper.style";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Card from "@/components/Card";
import { useContext } from "react";
import { ApiContext } from "@/context/ContextApi";
import StyledHome from "@/styles/Home.style";
import { ModalContext } from "@/context/ModalContext";
import Modal from "@/components/Modal";

export default function Home() {
  const { eachPokemonData } = useContext(ApiContext)
  const { modalOpen } = useContext(ModalContext)

  return(
    <Wrapper>
      <GlobalStyle />
      <StyledHome>
        {modalOpen ? <Modal /> : null}
        {eachPokemonData.map((pokemon, index) => (
          
          <Card key={index} name={pokemon.name} sprite={pokemon.sprites.front_default} types={pokemon.types} />
        ))}
      </StyledHome>
    </Wrapper>
  )
}
