import Image from "next/image";
import styled from "styled-components";

interface CardProps {
    name: string
    sprite: string
    types: {
        type: {
            name: string;
        }
    }[];
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
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    color: var(--font-light);
    align-items: center;
    border: 2px solid var(--orange);
    border-radius: var(--border-radius);
    overflow: hidden;
    
    & span {
        background-color: var(--bg-light);
        width: 100%;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        display: flex;
        justify-content: center;
    }

    & h2 {
        text-transform: capitalize;
        text-align: center;
        padding: .5em;
    }

    & ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    width: 160px;
  }

  & li {
    padding: 0.5em .5em;
    color: var(--shadow);
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
`

export default function Card({ name, sprite, types }: CardProps) {
    return(
        <StyledCard>
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