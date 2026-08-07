import BrowserChrome from './BrowserChrome.jsx'

function ProjectCard({ project }) {
    return (
        <BrowserChrome url={project.url}>
            {/* Thumbnail */}
            <div
                className="relative flex items-center justify-center"
                style={{ background: project.thumbBg, height: '140px' }}
            >
                {/* Abstract decorative marks */}
                <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                    <rect x="2" y="2" width="30" height="5" rx="2.5" fill={project.thumbAccent} opacity="0.25" />
                    <rect x="2" y="12" width="50" height="5" rx="2.5" fill={project.thumbAccent} opacity="0.18" />
                    <rect x="2" y="22" width="40" height="5" rx="2.5" fill={project.thumbAccent} opacity="0.18" />
                    <rect x="2" y="32" width="22" height="5" rx="2.5" fill={project.thumbAccent} opacity="0.25" />
                    <circle cx="68" cy="25" r="14" fill={project.thumbAccent} opacity="0.12" />
                </svg>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3
                    className="mb-1 font-heading font-semibold text-lg text-text-primary"
                >
                    {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-[6px] mb-5">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2 py-1 rounded font-body bg-surface-muted text-text-muted border border-border"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={project.demo}
                        className="text-md font-medium flex items-center gap-1 transition-colors hover:opacity-75 font-body text-primary"
                    >
                        Live demo
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6h7M6.5 2.5L10 6 6.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a
                        href={project.code}
                        className="text-md flex items-center gap-1 transition-colors hover:opacity-75 text-text-secondary font-body"
                    >
                        Code
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4 2.5L1 6l3 3.5M8 2.5L11 6l-3 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </BrowserChrome>
    )
}

export default ProjectCard