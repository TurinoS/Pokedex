import styled from "styled-components";
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

interface PaginationProps {
    currentPage: number
    previousPage: () => void
    nextPage: () => void
}

const StyledPagination = styled.div`
    display: flex;
    gap: .3em;
    justify-content: flex-end;
    align-items: center;
    margin: 1em 0;

    & button {
        display: flex;
        align-items: center;
        border: none;
        border-radius: var(--border-radius);
        background-color: var(--orange);
        font-size: 26px;
        padding: .2em;
        &:hover {
            cursor: pointer;
        }
    }

    & span {
        font-size: 20px;
        font-weight: 500;
        color: var(--orange);
    }
`

export default function Pagination({ currentPage, previousPage, nextPage }: PaginationProps) {
    const { toggleModal, modalOpen } = useContext(ModalContext);

    function handleNextPage() {
        if(modalOpen) {
            toggleModal();
        }
        nextPage();
    }

    function handlePreviousPage() {
        if(modalOpen) {
            toggleModal();
        }
        previousPage();
    }

    return(
        <StyledPagination>
            <button onClick={handlePreviousPage}><GrPrevious /></button>
            <span>Page {currentPage + 1} / 47</span>
            <button onClick={handleNextPage}><GrNext /></button>
        </StyledPagination>
    )
}