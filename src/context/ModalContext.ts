export type ModalType = 'export' | 'configure' | null;

export interface ModalContextType {
    modalOpen: ModalType;
    openModal: (modal: ModalType) => void;
    closeModal: () => void;
}

import { createContext, useContext } from 'react';

// Context should be declared in this separate file to avoid mixing it with components
export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
