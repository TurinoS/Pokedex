import Image from "next/image";
import styled from "styled-components";
import { useContext } from "react";
import { ApiContext } from "@/context/ContextApi";
import { ModalContext } from "@/context/ModalContext";

const colors: Record<string, string> = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

const StyledModal = styled.section`
    display: grid;
    grid-template-areas:
    "img name name name name"
    "img about blank abilities abilities"
    "stats stats stats stats stats";
    background-color: var(--bg-dark);
    color: var(--font-light);
    width: 50vw;
    height: 70vh;
    position: fixed;
    top: 15vh;
    left: 25vw;
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
        padding: .5em 0 0 3em;
    }

    & h3 {
        color: var(--font-light-light);
        font-size: 20px;
        margin-bottom: .2em;
    }

    & span {
        font-size: 18px;
        color: var(--font-light);
    }

    & ul {
        display: flex;
        gap: .5em;
    }

    & li {
        font-size: 18px;
        list-style: none;
        color: var(--font-dark);
        padding: .2em .5em;
        margin-top: .2em;
        border-radius: var(--border-radius);
    }

    & p {
        font-size: 18px;
        color: var(--font-light);
        font-weight: 600;
        margin-bottom: .2em;
    }

    & .about-container {
        grid-area: about;
        border-right: 2px solid var(--orange);
    }

    & .abilities-container {
        grid-area: abilities;
    }

    & .stats-container {
    grid-area: stats;
    padding: 1em;

    & .stat-item {
      display: flex;
      align-items: center;
      margin-bottom: .5em;

      & .stat-name {
        font-size: 18px;
        color: var(--font-light);
        font-weight: 600;
        width: 150px;
        flex-shrink: 0;
      }

      & .stat-bar {
        display: flex;
        align-items: center;
        height: 16px;
        width: 100%;
        background-color: var(--bg-light);
        border-radius: var(--border-radius);
        overflow: hidden;
        position: relative;
      }

      & .stat-fill {
        height: 100%;
        background-color: var(--orange);
      }

      & .stat-value {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        font-size: 14px;
        font-weight: 600;
        color: var(--font-dark);
        padding-left: 4px;
      }
    }
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
            <div className="about-container">
                <h3>Weight: <span>{eachPokemonData[0].weight/10} kg</span></h3>
                <h3>Height: <span>{eachPokemonData[0].height/10} m</span></h3>
                <h3>Types:</h3>
                <ul>
                    {eachPokemonData[0].types.map((type, index) => (
                    
                        <li key={index} style={{ backgroundColor: colors[type.type.name.toLowerCase()] }}>{type.type.name}</li>
                    
                    ))}
                </ul>
            </div>
            <div className="abilities-container">
                <h3>Abilities:</h3>
                {eachPokemonData[0].abilities.map((ability, index) => (
                    <p key={index}>{ability.ability.name}</p>
                ))}
            </div>
            <div className="stats-container">
                <h3>Stats:</h3>
                {eachPokemonData[0].stats.map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <span className="stat-name">{stat.stat.name}</span>
                        <div className="stat-bar">
                            <span className="stat-value">{stat.base_stat}</span>
                            <div className="stat-fill" style={{ width: `${stat.base_stat}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </StyledModal>
    )
}