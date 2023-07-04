import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: var(--bg-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3em 5em;

    & h1 {
        color: var(--orange);
    }

    & input {
        background-color: var(--bg-dark);
        border: 1px solid var(--orange);
        border-radius: var(--border-radius);
        padding: .25em 1.5em;
        font-size: 18px;
        color: var(--orange);

        &:focus {
            border: 2px solid var(--orange);
            outline: none; 
        }

        &::placeholder {
            color: var(--orange);
        }
    }
`

export default function Header() {
    return(
        <StyledHeader>
            <h1>PokéDex</h1>
            <input type="text" placeholder="Que pokémon você busca?" />
            toggle
        </StyledHeader>
    )
}