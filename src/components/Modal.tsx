import Image from "next/image";
import styled from "styled-components";
import { useContext } from "react";
import { ApiContext } from "@/context/ContextApi";
import { ModalContext } from "@/context/ModalContext";
import StyledModal from "@/styles/Modal.style";

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

export default function Modal() {
    const { eachPokemonData } = useContext(ApiContext)
    const { toggleModal } = useContext(ModalContext)

    function openModal() {
        toggleModal();
    }

    return(
        <StyledModal>
            <Image src={eachPokemonData[5].sprites.front_default} alt={eachPokemonData[5].name} width={200} height={200} />
            <button onClick={openModal}>x</button>
            <h2>{eachPokemonData[5].name}</h2>
            <div className="about-container">
                <h3>Weight: <span>{eachPokemonData[5].weight/10} kg</span></h3>
                <h3>Height: <span>{eachPokemonData[5].height/10} m</span></h3>
                <h3>Types:</h3>
                <ul>
                    {eachPokemonData[5].types.map((type, index) => (
                    
                        <li key={index} style={{ backgroundColor: colors[type.type.name.toLowerCase()] }}>{type.type.name}</li>
                    
                    ))}
                </ul>
            </div>
            <div className="abilities-container">
                <h3>Abilities:</h3>
                {eachPokemonData[5].abilities.map((ability, index) => (
                    <p key={index}>{ability.ability.name}</p>
                ))}
            </div>
            <div className="stats-container">
                <h3>Stats:</h3>
                {eachPokemonData[5].stats.map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <span className="stat-name">{stat.stat.name}</span>
                        <div className="stat-bar">
                            <span className="stat-value">{stat.base_stat}</span>
                            <div className="stat-fill" style={{ width: `${stat.base_stat * .65}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </StyledModal>
    )
}