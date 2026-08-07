function Contact() {
    return (
        <section id="contact" className="py-24 max-w-full border-t max-h-screen border-border">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.25 rounded-full mb-8 bg-primary-light border border-[#d0e8da]"
                >
                    <span className="w-2.5 h-2.5 rounded-full inline-block bg-primary" />
                    <span className="font-body text-md text-primary-dark" >
                        Available now
                    </span>
                </div>

                <h2
                    className="mb-5 font-heading font-bold text-[clamp(32px,5vw,52px)] text-text-primary"

                >
                    Let's build something.
                </h2>
                <p className="mb-10 max-w-md mx-auto leading-relaxed font-body font-normal text-lg text-text-secondary">
                    I'm actively looking for frontend roles. If you have a project or an open position, I'd love to hear about it.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="mailto:ritikgarg8910@gmail.com"
                        className="inline-flex items-center gap-2 px-5 py-2.75 rounded-lg text-md bg-text-primary  text-bg font-medium transition-all hover:opacity-90 active:scale-[0.98]"
                    >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M1.5 3.5h12v9h-12v-9zm0 0l6 4.5 6-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Say hello
                    </a>
                    <a
                        href="https://linkedin.com/in/ritik-garg-853a68289"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.75 rounded-lg text-md border border-border text-text-primary font-body font-medium transition-all hover:bg-[#EAF3EE] active:scale-[0.98]"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/RitikGarg89"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.75 rounded-lg text-md border border-border text-text-primary font-body font-medium transition-all hover:bg-[#EAF3EE] active:scale-[0.98]"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}


export default Contact