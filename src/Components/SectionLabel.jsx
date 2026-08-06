function SectionLabel({ num, label }) {
    return (
        <div className="flex items-center gap-3 mb-10">
            <span
                className="font-mono text-lg text-color-primary font-medium"
            >
                {num}
            </span>
            <span className="w-8 h-0.5 bg-border inline-block" />
            <span
                className="font-body text-lg text-text-muted tracking-[0.08em] uppercase"
            >
                {label}
            </span>
        </div>
    )
}

export default SectionLabel