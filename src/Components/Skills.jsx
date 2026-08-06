import SectionLabel from "./SectionLabel"
import Tag from "./Tag"

function Skills() {
    const skillCategories = [
        {
            label: 'Languages',
            skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
        },
        {
            label: 'Web Development',
            skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'REST APIs', 'Git'],
        },
        {
            label: 'Database & Data',
            skills: ['MySQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Jupyter', 'Power BI'],
        },
        {
            label: 'Tools & Platforms',
            skills: ['GitHub', 'VS Code', 'Figma', 'Vercel', 'Linux', 'Postman'],
        },
    ]

    return (
        <section id="skills" className="py-24 max-w-full border-t max-h-screen border-border">
            <div className="max-w-7xl mx-auto px-6">
                <SectionLabel num="01" label="Skills" />
                <h2
                    className="mb-12 font-heading font-semibold text-[clamp(32px,4vw,48px)] text-text-primary tracking-tight"
                >
                    What I work with
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.label}
                            className="p-6 rounded-xl bg-surface border border-border"
                        >
                            <p
                                className="mb-4"
                                style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', color: '#8A8D91', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}
                            >
                                {cat.label}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((s) => (
                                    <Tag key={s}>{s}</Tag>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills