import Image from "next/image";
import styled from "styled-components";
import { useContext } from "react";
import { ApiContext } from "@/context/ContextApi";
import { ModalContext } from "@/context/ModalContext";

const StyledModal = styled.section`
    display: grid;
    grid-template-areas:
    "img name name name name"
    "img about about abilities abilities"
    "stats stats stats stats stats";
    background-color: var(--bg-dark);
    color: var(--font-light);
    width: 60vw;
    height: 60vh;
    position: absolute;
    top: 20vh;
    left: 20vw;
    border: 2px solid var(--orange);
    border-radius: var(--border-radius);

    & img {
        grid-area: img;
        border-bottom: 2px solid var(--orange);
        border-right: 2px solid var(--orange);
        border-radius: var(--border-radius) 0;
        background-color: var(--font-dark);
    }

    & button {
        background-color: var(--bg-light);
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        border-bottom: 2px solid var(--orange);
        border-left: 2px solid var(--orange);
        font-size: 20px;
        color: var(--font-dark);
        padding: .2em .6em;
        border-radius: 0 var(--border-radius);

        &:hover {
            cursor: pointer;
            color: var(--orange);
            background-color: var(--font-dark);
            transition: 350ms;
        }
    }

    & h2 {
        grid-area: name;
        color: var(--orange);
        text-transform: capitalize;
        font-size: 30px;
        padding-left: 3em;
    }

    & div:nth-child(7) {
        grid-area: about;
    }
    & div:nth-child(5) {
        grid-area: abilities;
    }
    & div:nth-child(6) {
        grid-area: stats;
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
            <button onClick={openModal}>x</button>
            <h2>{eachPokemonData[0].name}</h2>
            <div>
                <h3>Weight: {eachPokemonData[0].weight}</h3>
                <h3>Height: {eachPokemonData[0].height}</h3>
                <h3>Types:</h3>
                {eachPokemonData[0].types.map((type, index) => (
                    <span key={index}>{type.type.name} </span>
                ))}
            </div>
            <div>
                <h3>Abilities:</h3>
                {eachPokemonData[0].abilities.map((ability, index) => (
                    <p key={index}>{ability.ability.name}</p>
                ))}
            </div>
            <div>
                <h3>Stats:</h3>
                {eachPokemonData[0].stats.map((stat, index) => (
                    <p key={index}>{stat.stat.name}: {stat.base_stat}</p>
                ))}
            </div>
        </StyledModal>
    )
}