import styled from "styled-components";
import { GrNext, GrPrevious } from 'react-icons/gr'

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
    return(
        <StyledPagination>
            <button onClick={previousPage}><GrPrevious /></button>
            <span>Page {currentPage + 1} / 47</span>
            <button onClick={nextPage}><GrNext /></button>
        </StyledPagination>
    )
}