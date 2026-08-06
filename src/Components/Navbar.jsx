import React from 'react'
import { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const links = ['Skills', 'Projects', 'Experience', 'Contact']

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-bg/85 border border-b-border backdrop-blur-4"
        >
            <nav className="max-w-[95%] mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#"
                    className="font-mono font-bold text-4xl text-text-primary"
                >
                    RG<span className="text-primary">.</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className="hover:text-text-primary font-mono text-lg text-secondary transition-colors duration-150"
                        >
                            {l}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1 p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="w-5 h-px block bg-text-primary" />
                    <span className="w-5 h-px block bg-text-primary" />
                    <span className="w-5 h-px block bg-text-primary" />
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="md:hidden px-6 py-5 flex flex-col gap-4 border-t-surface-muted border bg-bg"
                >
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className='font-mono text-lg text-secondary'
                        >
                            {l}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}


export default Navbar