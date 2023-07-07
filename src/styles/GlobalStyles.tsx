import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-dark: #01022f;
        --font-light: #6c6ee7;
        --bg-dark: #010446;
        --bg-light: #282a86;
        --orange: #e56d17;
        --normal: '#A8A77A';
        --fire: '#EE8130';
        --water: '#6390F0';
        --electric: '#F7D02C';
        --grass: '#7AC74C';
        --ice: '#96D9D6';
        --fighting: '#C22E28';
        --poison: '#A33EA1';
        --ground: '#E2BF65';
        --flying: '#A98FF3';
        --psychic: '#F95587';
        --bug: '#A6B91A';
        --rock: '#B6A136';
        --ghost: '#735797';
        --dragon: '#6F35FC';
        --steel: '#B7B7CE';
        --fairy: '#D685AD';
        --shadow: #0a0b29;
        --border-radius: 18px;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto_Flex', sans-serif;
    }

    body {
        background-color: var(--bg-dark);
    }
`