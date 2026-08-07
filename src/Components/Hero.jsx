import BrowserChrome from "./BrowserChrome"

function Hero() {
    const codeLines = [
        { tokens: [{ t: 'const ', c: '#8A8D91' }, { t: 'dev', c: '#14171B' }, { t: ' = {', c: '#52565C' }] },
        { tokens: [{ t: '  name', c: '#1B8A5A' }, { t: ': ', c: '#52565C' }, { t: '"Ritik Garg"', c: '#E5594E' }, { t: ',', c: '#52565C' }] },
        { tokens: [{ t: '  role', c: '#1B8A5A' }, { t: ': ', c: '#52565C' }, { t: '"Frontend Developer"', c: '#E5594E' }, { t: ',', c: '#52565C' }] },
        { tokens: [{ t: '  stack', c: '#1B8A5A' }, { t: ': [', c: '#52565C' }] },
        { tokens: [{ t: '    ', c: '' }, { t: '"React"', c: '#E5594E' }, { t: ', ', c: '#52565C' }, { t: '"TypeScript"', c: '#E5594E' }, { t: ',', c: '#52565C' }] },
        { tokens: [{ t: '    ', c: '' }, { t: '"Next.js"', c: '#E5594E' }, { t: ', ', c: '#52565C' }, { t: '"Tailwind"', c: '#E5594E' }, { t: ',', c: '#52565C' }] },
        { tokens: [{ t: '  ],', c: '#52565C' }] },
        { tokens: [{ t: '  degree', c: '#1B8A5A' }, { t: ': ', c: '#52565C' }, { t: '"BCA"', c: '#E5594E' }, { t: ',', c: '#52565C' }] },
        { tokens: [{ t: '  status', c: '#1B8A5A' }, { t: ': ', c: '#52565C' }, { t: '"open to work"', c: '#3FAE6B' }] },
        { tokens: [{ t: '}', c: '#52565C' }] },
    ]

    const colorMap = {
        '#8A8D91': 'text-text-muted',
        '#14171B': 'text-text-primary',
        '#52565C': 'text-text-secondary',
        '#1B8A5A': 'text-primary',
        '#0F5C3B': 'text-primary-dark',
        '#E5594E': 'text-danger',
        '#3FAE6B': 'text-success',
    }

    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-[80%] mx-auto px-6 w-full py-10">
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    {/* Left */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.25 rounded-full mb-8 bg-primary-light border border-[#d0e8da]">
                            <span className="w-1.75 h-1.75 rounded-full inline-block animate-pulse bg-primary" />
                            <span className="font-mono text-xs text-primary-dark">
                                Open to frontend roles
                            </span>
                        </div>

                        <h1 className="mb-5 leading-[1.08] font-heading font-bold text-[clamp(36px,5vw,54px)] text-text-primary tracking-[-0.02em]">
                            Ritik Garg builds clean,{' '}
                            <span className="text-primary">working</span>{' '}
                            interfaces.
                        </h1>

                        <p className="mb-9 leading-relaxed max-w-sm text-base text-text-secondary">
                            Frontend developer with a BCA degree and a data background. I turn designs into fast, accessible, production-ready web apps — and I care about the details.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-5 py-2.75 rounded-lg text-sm font-medium transition-all duration-500 hover:opacity-90 hover:bg-primary active:scale-[0.98] bg-text-primary text-bg font-body"
                            >
                                View projects
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-5 py-2.75 rounded-lg text-sm font-medium transition-all duration-150 hover:bg-primary-dark hover:text-primary-light active:scale-[0.98] border border-border text-text-primary font-body"
                            >
                                Get in touch
                            </a>
                        </div>
                    </div>

                    {/* Right — browser code block */}
                    <div>
                        <BrowserChrome url="ritikgarg.dev/about.js">
                            <div className="p-5 bg-[#FAFAFA]">
                                <pre className="text-[13px] leading-[1.7] font-mono overflow-x-auto">
                                    {codeLines.map((line, i) => (
                                        <div key={i}>
                                            {line.tokens.map((tok, j) => (
                                                <span key={j} className={colorMap[tok.c] || ''}>{tok.t}</span>
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            </div>
                        </BrowserChrome>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero