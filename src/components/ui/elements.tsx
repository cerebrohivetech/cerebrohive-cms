import type { ReactNode } from "react";

export function Section({children, className}: {children: ReactNode, className?: string}) {
    
    return (
        <section className={`w-auto mx-[32px] ${className? className: ""}`}>
            {children}
        </section>
    )
}