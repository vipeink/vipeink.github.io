import { ReactNode, useState, useMemo } from 'react';
import { ModalContext } from './ModalContext';

export function ModalProvider({ children }: { children: ReactNode }) {
    const [modalOpen, setModalOpen] = useState<'export' | 'configure' | null>(null);

    const value = useMemo(() => ({
        modalOpen,
        openModal: setModalOpen,
        closeModal: () => setModalOpen(null)
    }), [modalOpen]);

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}
