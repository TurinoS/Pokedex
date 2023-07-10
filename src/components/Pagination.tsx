import styled from "styled-components";
import { GrNext, GrPrevious } from 'react-icons/gr'

interface PaginationProps {
    currentPage: number
    previousPage: () => void
    nextPage: () => void
}

const StyledPagination = styled.div`

`

export default function Pagination({ currentPage, previousPage, nextPage }: PaginationProps) {
    return(
        <StyledPagination>
            <button onClick={previousPage}><GrPrevious /></button>
            <span>{currentPage + 1}/47</span>
            <button onClick={nextPage}><GrNext /></button>
        </StyledPagination>
    )
}