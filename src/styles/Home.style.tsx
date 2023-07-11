import styled from "styled-components";

const StyledHome = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;

    @media (max-width: 600px) {
        justify-content: center;
        gap: 2vw;
    }
`

export default StyledHome;