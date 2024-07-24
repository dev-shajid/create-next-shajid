import React from 'react'
import { cn } from "@/lib/utils"

interface SectionTypes extends React.PropsWithChildren{
    className?: string | undefined
}

export default function Section({ children, className }: SectionTypes): React.JSX.Element {
    return (
        <section className={cn("container space-y-6", className)}>
            {children}
        </section>
    )
}
