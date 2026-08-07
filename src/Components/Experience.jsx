import SectionLabel from "./SectionLabel"

function Experience() {
    const experience = [
        {
            role: 'Data Analytics Intern',
            company: 'Skilledup Technologies Pvt. Ltd.',
            dates: 'Jun 2025 – Aug 2025',
            bullets: [
                'Contributed to data analytics projects using Python, SQL Workbench, Google BigQuery, and Power BI.',
                'Applied strong analytical skills to consistently support team objectives and deliver quality project outcomes.',
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
                                    className="absolute left-0 top-1.5 w-2.75 h-2.75 rounded-full hidden sm:block bg-primary border-2 border-bg ring-2 ring-border"
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