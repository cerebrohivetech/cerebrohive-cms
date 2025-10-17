import type { ReactNode } from "react";

export default function RootLayout({children, className}: {children: ReactNode, className?: string}) {

    return (
        <main className={`w-[100%] h-auto ${className}`}>
            {children}
        </main>
    )
}