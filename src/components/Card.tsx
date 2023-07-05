import styled from "styled-components";

interface CardProps {
    name: string
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
`

export default function Card({ name }: CardProps) {
    return(
        <StyledCard>
            
            <h2>{name}</h2>
        </StyledCard>
    )
}