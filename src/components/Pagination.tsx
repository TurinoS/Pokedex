import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useContext, useState } from "react";
import { ModalContext } from "@/context/ModalContext";
import { ApiContext } from "@/context/ContextApi";

const StyledPagination = styled.div`
  display: flex;
  gap: 0.3em;
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
    padding: 0.2em;
    &:hover {
      cursor: pointer;
    }
  }

  & span {
    font-size: 20px;
    font-weight: 500;
    color: var(--orange);
  }
`;

export default function Pagination() {
  const { toggleModal, modalOpen } = useContext(ModalContext);
  const { currentPage, nextPage, previousPage } = useContext(ApiContext);
  const [canChangePage, setCanChangePage] = useState(true);

  function handleNextPage() {
    if (modalOpen) {
      toggleModal();
    }
    if (canChangePage) {
      setCanChangePage(false);
      nextPage();
      setTimeout(() => {
        setCanChangePage(true);
      }, 1500);
    }
  }

  function handlePreviousPage() {
    if (modalOpen) {
      toggleModal();
    }
    if (canChangePage) {
      setCanChangePage(false);
      previousPage();
      setTimeout(() => {
        setCanChangePage(true);
      }, 1500);
    }
  }

  return (
    <StyledPagination>
      <button onClick={handlePreviousPage}>
        <GrPrevious />
      </button>
      <span>Page {currentPage + 1} / 47</span>
      <button onClick={handleNextPage}>
        <GrNext />
      </button>
    </StyledPagination>
  );
}
