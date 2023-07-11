"use client";

import { useContext } from "react";
import { ApiContext } from "@/context/ContextApi";
import { ModalContext } from "@/context/ModalContext";
import { SearchContext } from "@/context/SearchContext";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Wrapper from "@/styles/Wrapper.style";
import StyledHome from "@/styles/Home.style";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import Card from "@/components/Card";

export default function Home() {
  const { eachPokemonData } = useContext(ApiContext);
  const { modalOpen, openModal } = useContext(ModalContext);
  const { pokemonToTake, fetchFailed, setDesiredPokemonId, desiredPokemonId } = useContext(SearchContext);

  const handleCardClick = (id: number) => {
    setDesiredPokemonId(id);
    openModal(id);
  };
  const handleCardModalClick = () => {
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Pagination />
      <StyledHome>
        {modalOpen && desiredPokemonId !== null && (
          <Modal id={desiredPokemonId} onClick={handleCardModalClick} />
        )}
        {!pokemonToTake || fetchFailed ? eachPokemonData.map((pokemon, index) => (
          <Card
            id={pokemon.id}
            key={index}
            name={pokemon.name}
            sprite={pokemon.sprites.front_default}
            types={pokemon.types}
            onClick={() => handleCardClick(pokemon.id)}
          />
        )) : 
          <Card 
            id={pokemonToTake.id}
            name={pokemonToTake.name}
            sprite={pokemonToTake.sprites.front_default}
            types={pokemonToTake.types}
            onClick={() => handleCardClick(pokemonToTake.id)}
          />}
      </StyledHome>
      <Pagination />
    </Wrapper>
  );
}
