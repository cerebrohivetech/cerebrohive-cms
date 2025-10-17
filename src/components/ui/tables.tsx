import type { ReactNode } from "react"
import type { IconProp } from "./buttons"
import { Image } from "./image"


export function Table({children, className}: {children: ReactNode, className?: string}) {

    return (
        <ul className={className}>
            {children}
        </ul>
    )
}

export function Row({head, children}: {head?: boolean, children: ReactNode, className?: string}) {

    return head? (
        <li className={`font-semibold h-[56px] border-b-1 border-second-70 flex`}>
            {children}
        </li>
    ): (
        <li className={`h-[76px] flex hover:bg-first-100`}>
            {children}
        </li>
    )
}

type TableDataProp = {
    children: ReactNode
    icon?: IconProp
    url?: string
    className?: string
}
export function Data({children, icon, url, className}: TableDataProp) {
    return url? (
        <div className={`w-full px-[32px] flex items-center justify-between ${className}`}>
            {children}
            {icon && <Image src={icon.src} alt={icon.alt} />}
        </div>
    ) : (
        <div className={`w-full px-[32px] flex items-center justify-between ${className}`}>
            {children}
            {icon && <Image src={icon.src} alt={icon.alt} />}
        </div>
    )
}

