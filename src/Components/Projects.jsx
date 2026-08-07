import SectionLabel from "./SectionLabel"
import ProjectCard from "./ProjectCard"

function Projects() {
    const projects = [
        {
            title: 'MovieQueue',
            description: 'A movie watchlist app with TMDB search and a ticket-stub inspired design. Queue persists across sessions via localStorage.',
            url: 'github.com/RitikGarg89/Movie-Queue-App',
            tech: ['React', 'Tailwind CSS', 'TMDB API'],
            thumbBg: '#EAF3EE',
            thumbAccent: '#1B8A5A',
            demo: 'https://movie-queue-app.vercel.app/',
            code: 'https://github.com/RitikGarg89/Movie-Queue-App',
        },
        {
            title: 'Currency Converter',
            description: 'Real-time currency converter pulling live exchange rates, with input validation and instant conversion.',
            url: 'github.com/RitikGarg89/Currency-Convertor-by-REACT',
            tech: ['React', 'Exchange Rate API'],
            thumbBg: '#E8F0FE',
            thumbAccent: '#4A7CF7',
            demo: null,
            code: 'https://github.com/RitikGarg89/Currency-Convertor-by-REACT',
        },
        {
            title: 'Positivus Landing Page',
            description: 'A marketing landing page rebuilt from a Figma design, focused on pixel-accurate layout across breakpoints.',
            url: 'github.com/RitikGarg89/positivus-fe',
            tech: ['HTML', 'CSS', 'JavaScript'],
            thumbBg: '#FEF3E8',
            thumbAccent: '#E5894E',
            demo: null,
            code: 'https://github.com/RitikGarg89/positivus-fe',
        },
        {
            title: 'Expense Tracker',
            description: 'Track, categorize, and delete transactions, with totals and balance updating in real time.',
            url: 'github.com/RitikGarg89/Expense-Tracker',
            tech: ['React'],
            thumbBg: '#F0EEF9',
            thumbAccent: '#7C5FD4',
            demo: null,
            code: 'https://github.com/RitikGarg89/Expense-Tracker',
        },
    ]
    return (
        <section id="projects" className="py-24 max-w-full border-t min-h-screen border-border">
            <div className="max-w-7xl mx-auto px-6">
                <SectionLabel num="02" label="Projects" />
                <h2
                    className="mb-12 font-heading font-semibold text-[clamp(32px,4vw,48px)] text-text-primary tracking-tight"
                >
                    Things I've shipped
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects