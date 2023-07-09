'use client'

import { ReactNode, createContext, useState } from "react";

type ModalContextType = {
  modalOpen: boolean;
  toggleModal: () => void;
  openModal: (id: number) => void;
};

export const ModalContext = createContext<ModalContextType>({
  modalOpen: false,
  toggleModal: () => {},
  openModal: () => {},
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
    const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModal = (id: number) => {
    toggleModal();
    console.log(id)
}

  return (
    <ModalContext.Provider value={{ modalOpen, toggleModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};