import React from 'react'

const PageSectionTop = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <section className={`max-w-screen-2xl mx-auto p-4 mt-[72px] py-6 md:py-12 lg:py-16 ${className || ""}`}>{children}</section>

    )
}

export default PageSectionTop