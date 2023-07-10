'use client'

import { ModalContext } from "@/context/ModalContext";
import StyledCard from "@/styles/Card.style";
import Image from "next/image";
import { useContext } from "react";

interface CardProps {
    id: number
    name: string
    sprite: string
    types: {
        type: {
            name: string;
        }
    }[];
    onClick: () => void;
}

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
    dark: '#705746',
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

export default function Card({ id, name, sprite, types, onClick }: CardProps) {

    const { openModal } = useContext(ModalContext)

    const handleClick = () => {
        openModal(id);
        onClick();
      };

    return(
        <StyledCard onClick={handleClick}>
            <span>
                <div>
                    <Image src={sprite} alt={`Imagem do ${name}`} width={120} height={120} />
                </div>
            </span>
            <div>
                <h2>{name}</h2>
                <ul>
                    {types.map((type, index) => {
                        return(
                            <li 
                                key={index}
                                style={{ backgroundColor: colors[type.type.name.toLowerCase()] }}
                            >
                                {type.type.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </StyledCard>
    )
}