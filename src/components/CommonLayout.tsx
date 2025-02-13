import React from 'react'

const CommonLayout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`max-w-screen-2xl mx-auto p-4 ${className}`}>{children}</div>
    )
}

export default CommonLayout