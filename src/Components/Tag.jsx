function Tag({ children }) {
    return (
        <span
            className="inline-block px-[10px] py-[3px] rounded-full text-sm font-medium font-body bg-primary-light border border-[#d0e8da]"
        >
            {children}
        </span>
    )
}

export default Tag