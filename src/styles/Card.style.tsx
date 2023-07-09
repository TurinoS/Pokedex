import { styled } from "styled-components";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    color: var(--font-light);
    align-items: center;
    border: 2px solid var(--orange);
    border-radius: var(--border-radius);
    overflow: hidden;

    &:hover {
      cursor: pointer;
      
      & img {
        transform: scale(1.2);
      }
    }
    
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

export default StyledCard;