import { cn } from '@/lib/utils'
import React from 'react'

function Wrapper({ children, className }: {
    children: React.ReactNode,
    className?: string,
}) {
    return (
        <div className={cn("h-full w-full mx-auto max-w-screen-xl px-4 md:px-0", className)}>
            {children}
        </div>
    )
}

export default Wrapper