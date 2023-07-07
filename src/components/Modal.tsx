import Image from "next/image";
import styled from "styled-components";

const StyledModal = styled.section`
    background-color: var(--orange);
    width: 60vw;
    height: 60vh;
    position: absolute;
    top: 20vh;
    left: 20vw;
`

export default function Modal() {
    return(
        <StyledModal>
            <h2>nome do pokemon</h2>
        </StyledModal>
    )
}