"use client";
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
}

export default function Modal({ title, children }: ModalProps) {
  const { modalOpen, closeModal } = useModal();

  if (!modalOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-vipeink-bg bg-opacity-95 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-vipeink-secondary border border-vipeink-border max-w-2xl w-full mx-4 sm:mx-8">
        <div className="flex items-center justify-between p-6 border-b border-vipeink-border sm:p-8">
          <h2 
            id="modal-title" 
            className="font-mono text-2xl text-vipeink-text-primary"
          >
            {title}
          </h2>
          <button
            onClick={closeModal}
            className="text-vipeink-text-secondary hover:text-vipeink-text-primary focus:outline-none focus:ring-2 focus:ring-vipeink-accent rounded-full"
            aria-label="Close modal"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}