'use client'

import { ReactNode, createContext, useState } from "react";

type ModalContextType = {
  modalOpen: boolean;
  toggleModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  modalOpen: false,
  toggleModal: () => {},
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
    const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};