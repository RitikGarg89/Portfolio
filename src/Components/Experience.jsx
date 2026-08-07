import SectionLabel from "./SectionLabel"

function Experience() {
    const experience = [
        {
            role: 'Frontend Developer Intern',
            company: 'Webstack Technologies',
            dates: 'Jun 2024 – Sep 2024',
            bullets: [
                'Built reusable React component library adopted across three internal products, cutting UI development time by ~35%.',
                'Migrated a legacy jQuery dashboard to React + TypeScript with no downtime during the transition.',
            ],
        },
        {
            role: 'Data Analyst Intern',
            company: 'DataBridge Solutions',
            dates: 'Jan 2024 – Apr 2024',
            bullets: [
                'Automated weekly reporting pipeline using Python (Pandas, openpyxl), saving ~8 hours of manual work per week.',
                'Created interactive Power BI dashboards for operations and sales teams, improving decision latency.',
            ],
        },
        {
            role: 'Freelance Web Developer',
            company: 'Self-employed',
            dates: '2022 – 2023',
            bullets: [
                'Delivered five client websites using HTML/CSS/JS and WordPress, all scoring 90+ on Lighthouse performance.',
                'Introduced Git-based workflows and staging environments to clients previously working without version control.',
            ],
        },
    ]
    return (
        <section id="experience" className="py-24 max-w-full border-t max-h-screen border-border">
            <div className="max-w-7xl mx-auto px-6">
                <SectionLabel num="03" label="Experience" />
                <h2
                    className="mb-12 font-heading font-semibold text-[clamp(32px,4vw,48px)] text-text-primary tracking-tight"
                >
                    Where I've worked
                </h2>

                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-1.5 top-2 bottom-2 w-px hidden sm:block bg-border"
                    />

                    <div className="flex flex-col gap-10">
                        {experience.map((exp, i) => (
                            <div key={i} className="sm:pl-10 relative">
                                {/* Dot */}
                                <div
                                    className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full hidden sm:block bg-primary border-2 border-bg ring-2 ring-border"
                                />

                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                                    <div>
                                        <h3
                                            className="font-heading font-semibold text-xl text-text-primary"
                                        >
                                            {exp.role}
                                        </h3>
                                        <p
                                            className="text-md text-primary font-medium"
                                        >{exp.company}</p>
                                    </div>
                                    <span
                                        className="font-body text-sm text-text-muted mt-0.5 whitespace-nowrap"
                                    >
                                        {exp.dates}
                                    </span>
                                </div>

                                <ul className="flex flex-col gap-2">
                                    {exp.bullets.map((b, j) => (
                                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                                            <span className="text-primary mt-0.5 shrink-0">—</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience