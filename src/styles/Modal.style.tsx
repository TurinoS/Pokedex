import { styled } from "styled-components";

const StyledModal = styled.section`
    display: grid;
    grid-template-areas:
        "img name name name name"
        "img about blank abilities abilities"
        "stats stats stats stats stats";
    background-color: var(--bg-dark);
    color: var(--font-light);
    min-width: 580px;
    width: 50vw;
    height: 70vh;
    position: fixed;
    top: 15vh;
    left: 25vw;
    border: 2px solid var(--orange);
    border-radius: var(--border-radius);
    box-shadow: 5px 5px 10px 10px var(--shadow);
    z-index: 5;

    @media (max-width: 1000px) {
        display: grid;
        width: 50vw;
        height: 80vh;
        left: 15vw;
    }

    @media (max-width: 800px) {
        display: grid;
        width: 50vw;
        height: 80vh;
        left: 10vw;
    }

    @media (max-width: 700px) {
        display: grid;
        width: 50vw;
        height: 90vh;
        left: 5vw;
        top: 5vh;
    }

    @media (max-width: 640px) {
        grid-template-areas:
            "img name name"
            "img about about"
            "img abilities abilities"
            "stats stats stats";
        min-width: 0;
        width: 90vw;
        height: 90vh;
    }

    & img {
        grid-area: img;
        border-bottom: 2px solid var(--orange);
        border-right: 2px solid var(--orange);
        border-radius: var(--border-radius) 0;
        background-color: var(--font-dark);

        @media (max-width: 640px) {
        width: 150px;
        height: 150px;
        }

        @media (max-width: 380px) {
        width: 100px;
        height: 100px;
        }
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
        padding: .5em 0 0 0;
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

    @media (max-width: 640px) {
            & .about-container {
            border: none;
            display: flex;
            flex-direction: column;
            margin: .5em .8em;
        }
    }

    & .abilities-container {
        grid-area: abilities;
        text-transform: capitalize;
    }

    @media (max-width: 640px) {
        & .abilities-container {
            display: flex;
            flex-direction: column;
            margin-left: .8em;
        }
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

export default StyledModal;