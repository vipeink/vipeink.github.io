"use client";
import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  id: string;
}

export default function Accordion({ 
  title, 
  subtitle, 
  children, 
  defaultOpen = false,
  id 
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article 
      className={`border border-vipeink-border bg-vipeink-secondary overflow-hidden ${
        isOpen ? 'rounded-none' : 'rounded-lg'
      }`}
      id={id}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:text-vipeink-accent focus:outline-none focus:ring-2 focus:ring-vipeink-accent focus:ring-offset-2 focus:ring-offset-vipeink-bg"
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <div>
          <h2 className="font-mono text-2xl mb-2 text-vipeink-text-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="font-mono text-sm text-vipeink-text-secondary max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        <ChevronDown
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div 
          id={`content-${id}`}
          className="px-6 pb-8 border-t border-vipeink-border"
        >
          {children}
        </div>
      )}
    </article>
  );
}