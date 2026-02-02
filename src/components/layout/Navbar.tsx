"use client";
import { useState, useEffect } from "react";

interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [currentPage]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["Architecture", "Documentation", "Systems", "FAQ", "Community"];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-vipeink-bg border-b border-vipeink-border py-3"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-5xl  px-8">
                {/* Logo */}
                <button
                    onClick={() => setCurrentPage("landing")}
                    className="font-mono text-sm text-vipeink-text-primary hover:text-vipeink-accent transition-colors"
                    aria-label="Go to homepage"
                >
                    VIPEINK

                </button>
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden max-w-5xl mx-auto px-8 items-end text-vipeink-text-primary"
                    aria-label="Toggle menu"
                >
                    <span className="block w-5 h-px bg-current mb-1" />
                    <span className="block w-5 h-px bg-current mb-1" />
                    <span className="block w-5 h-px bg-current" />
                </button>
                {/* Desktop navigation */}
                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => {
                        const page = item.toLowerCase();
                        const active = currentPage === page;

                        return (
                            <button
                                key={item}
                                onClick={() => setCurrentPage(page)}
                                className={`font-mono text-sm relative group transition-colors ${
                                    active
                                        ? "text-vipeink-text-primary"
                                        : "text-vipeink-text-secondary hover:text-vipeink-text-primary"
                                }`}
                                aria-current={active ? "page" : undefined}
                            >
                                {item}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-px bg-vipeink-accent transform origin-left transition-transform ${
                                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* Burger (mobile only) */}


                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-vipeink-bg border-t border-vipeink-border">
                        <div className="flex flex-col px-8 py-4 gap-4">
                            {navItems.map((item) => {
                                const page = item.toLowerCase();
                                const active = currentPage === page;

                                return (
                                    <button
                                        key={item}
                                        onClick={() => setCurrentPage(page)}
                                        className={`font-mono text-sm text-left transition-colors ${
                                            active
                                                ? "text-vipeink-accent"
                                                : "text-vipeink-text-secondary hover:text-vipeink-text-primary"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
