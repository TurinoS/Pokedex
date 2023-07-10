"use client";

import { useContext, useState } from "react";
import { ApiContext } from "@/context/ContextApi";
import { ModalContext } from "@/context/ModalContext";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Wrapper from "@/styles/Wrapper.style";
import StyledHome from "@/styles/Home.style";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import Card from "@/components/Card";

export default function Home() {
  const { eachPokemonData, currentPage, nextPage, previousPage, desiredPokemonId, setDesiredPokemonId } = useContext(ApiContext);
  const { modalOpen } = useContext(ModalContext);

  const handleCardClick = (id: number) => {
    setDesiredPokemonId(id - 1);
  };
  const handleCardModalClick = () => {
    console.log(desiredPokemonId)
  };

  return (
    <Wrapper>
      <GlobalStyle />
        <Pagination
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
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
            onClick={() => handleCardClick(pokemon.id)}
          />
        ))}
      </StyledHome>
      <Pagination
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
    </Wrapper>
  );
}
