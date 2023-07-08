import Image from "next/image";
import styled from "styled-components";
import { useContext } from "react";
import { ApiContext } from "@/context/ContextApi";
import { ModalContext } from "@/context/ModalContext";

const StyledModal = styled.section`
    background-color: var(--bg-dark);
    color: var(--font-light);
    width: 70vw;
    height: 70vh;
    position: sticky;
    top: 10vh;
    left: 10vw;
    border: 2px solid var(--orange);
    border-radius: var(--border-radius);

    & img {
        border-bottom: 2px solid var(--orange);
        border-right: 2px solid var(--orange);
        border-radius: var(--border-radius) 0;
        background-color: var(--font-dark);
    }

    & h2 {
        color: var(--orange);
        text-transform: capitalize;
        font-size: 30px;
        padding-left: 3em;
    }
`

export default function Modal() {
    const { eachPokemonData } = useContext(ApiContext)
  const { modalOpen, toggleModal } = useContext(ModalContext)

  function openModal() {
    toggleModal();
    console.log(modalOpen)
  }

    return(
        <StyledModal>
            <Image src={eachPokemonData[0].sprites.front_default} alt={eachPokemonData[0].name} width={200} height={200} />
            <h2>{eachPokemonData[0].name}</h2>
        </StyledModal>
    )
}