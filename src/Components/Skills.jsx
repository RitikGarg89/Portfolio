import SectionLabel from "./SectionLabel"
import Tag from "./Tag"

function Skills() {
    const skillCategories = [
        {
            label: 'Languages',
            skills: ['Python', 'C++', 'JavaScript', 'Java', 'PHP'],
        },
        {
            label: 'Web Development',
            skills: ['HTML', 'CSS', 'React.js', 'Node.js'],
        },
        {
            label: 'Database & Data',
            skills: ['MySQL', 'MongoDB', 'Google BigQuery', 'Power BI'],
        },
        {
            label: 'Tools & Platforms',
            skills: ['Git', 'GitHub', 'Postman', 'Vercel'],
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
                                className="mb-4 font-body text-md text-text-muted tracking-widest uppercase font-medium"
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