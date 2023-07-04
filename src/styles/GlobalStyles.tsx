import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-dark: #01022f;
        --font-light: #6c6ee7;
        --bg-dark: #010446;
        --bg-light: #282a86;
        --orange: #e56d17;
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