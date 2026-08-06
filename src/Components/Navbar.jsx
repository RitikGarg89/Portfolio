import React from 'react'
import { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const links = ['Skills', 'Projects', 'Experience', 'Contact']

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg"
            style={{ background: 'rgba(251,251,249,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E4E3DD' }}
        >
            <nav className="max-w-[95%] mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#"
                    style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', color: '#14171B' }}
                >
                    RG<span style={{ color: '#1B8A5A' }}>.</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#52565C' }}
                            className="hover:text-[#14171B] transition-colors duration-150"
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
                    <span className="w-5 h-px block" style={{ background: '#14171B' }} />
                    <span className="w-5 h-px block" style={{ background: '#14171B' }} />
                    <span className="w-5 h-px block" style={{ background: '#14171B' }} />
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="md:hidden px-6 pb-5 flex flex-col gap-4"
                    style={{ borderTop: '1px solid #E4E3DD', background: '#FBFBF9' }}
                >
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            style={{ fontFamily: 'IBM Plex Mono', fontSize: '14px', color: '#52565C' }}
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