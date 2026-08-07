function Footer() {
    return (
        <footer className="py-8 text-center border-t max-w-full border-border">
            <p className="text-xs text-text-muted font-body font-bold">
                © {new Date().getFullYear()} Ritik Garg — designed &amp; built by hand
            </p>
        </footer>
    )
}
export default Footer