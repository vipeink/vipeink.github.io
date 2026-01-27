"use client";
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Architecture', 'Documentation', 'Systems', 'FAQ', 'Community'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-vipeink-bg border-b border-vipeink-border py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-5xl mx-auto px-8 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage('landing')}
          className="font-mono text-sm text-vipeink-text-primary hover:text-vipeink-accent transition-colors"
          aria-label="Go to homepage"
        >
          VIPEINK
        </button>
        <div className="flex gap-8">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => setCurrentPage(item.toLowerCase())}
              className={`font-mono text-sm transition-colors relative group ${
                currentPage === item.toLowerCase() 
                  ? 'text-vipeink-text-primary' 
                  : 'text-vipeink-text-secondary hover:text-vipeink-text-primary'
              }`}
              aria-current={currentPage === item.toLowerCase() ? 'page' : undefined}
            >
              {item}
              <span className={`absolute bottom-0 left-0 w-full h-px bg-vipeink-accent transform origin-right transition-transform ${
                currentPage === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}