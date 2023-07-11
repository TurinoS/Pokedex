import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--bg-light);
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--orange);

    & div {
        display: flex;
        align-items: center;

        & img {
            width: 75px;
            height: 75px;
        }
    }

    & form {
        display: flex;
        align-items: center;
    }

    & input {
        background-color: var(--bg-dark);
        border: 1px solid var(--orange);
        border-radius: var(--border-radius) 0 0 var(--border-radius);
        padding: .25em 1.5em;
        font-size: 18px;
        color: var(--orange);
        max-width: 275px;
        width: 50vw;

        &:focus {
            outline: none; 
        }

        &::placeholder {
            color: var(--orange);
        }
    }

    & button {
        background-color: var(--bg-dark);
        border: 1px solid var(--orange);
        border-radius: 0 var(--border-radius) var(--border-radius) 0;
        padding: .3em .8em .1em .4em;
        font-size: 18px;
        color: var(--orange); 

        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
        height: auto;
        padding-bottom: .75em;

        & input {
            width: 75vw;
        }
    }
`;