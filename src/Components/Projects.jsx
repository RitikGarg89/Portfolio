import SectionLabel from "./SectionLabel"
import ProjectCard from "./ProjectCard"

function Projects() {
    const projects = [
        {
            title: 'DevTrack',
            description: 'A task management dashboard for solo devs with GitHub integration and Kanban boards.',
            url: 'ritikgarg.dev/projects/devtrack',
            tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
            thumbBg: '#E8F0FE',
            thumbAccent: '#4A7CF7',
            demo: '#',
            code: '#',
        },
        {
            title: 'StockSense',
            description: 'Real-time stock screener with filterable tables, sparklines, and CSV export.',
            url: 'ritikgarg.dev/projects/stocksense',
            tech: ['Next.js', 'Python', 'PostgreSQL', 'Recharts'],
            thumbBg: '#EAF3EE',
            thumbAccent: '#1B8A5A',
            demo: '#',
            code: '#',
        },
        {
            title: 'MarkdownNow',
            description: 'Browser-based Markdown editor with live preview, dark mode, and local persistence.',
            url: 'ritikgarg.dev/projects/markdownnow',
            tech: ['React', 'Vite', 'CodeMirror', 'Marked'],
            thumbBg: '#FEF3E8',
            thumbAccent: '#E5894E',
            demo: '#',
            code: '#',
        },
        {
            title: 'OpenWeather UI',
            description: 'Clean weather dashboard pulling OpenWeatherMap data, with 7-day forecast cards.',
            url: 'ritikgarg.dev/projects/weather',
            tech: ['React', 'TypeScript', 'REST API', 'CSS Grid'],
            thumbBg: '#F0EEF9',
            thumbAccent: '#7C5FD4',
            demo: '#',
            code: '#',
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