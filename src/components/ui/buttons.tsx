import type { ReactNode } from "react";
import CalenderIcon from './../../assets/calender.svg'
import PlusIcon from "../../assets/plus_icon.svg"
import { Image } from "./image";

export type IconProp = {
    src: string
    alt: string
    side?: "left" | "right"
    className?: string
}

type ButtonProp = {
    type: "submit" | "button" | "reset"
    className?: string
    children: ReactNode
    icon?: IconProp,
    variant?: "classic" | "dark" | "auth"
    size?: "small" | "medium" | "large" 
    loading?: boolean
    onClick?: () => void
}

export function Button({type, className, children, icon, loading, variant, onClick, size="small"}: ButtonProp) {
    const sizes = size === "small"? "px-[14px]": size === "medium"? "w-[139px]" : ""
    const variants = variant === "auth"? "bg-first-60 border-first-80 rounded-sm font-bold border-1" : variant === "dark"? "bg-second-60 border-1 border-second-70 font-normal text-sm/[100%] text-first-30 rounded-sm" : "bg-first-60 border-first-80 rounded-sm border-1 font-normal text-sm/[100%] text-first-10"

    return (
        <button 
            type={type} 
            disabled={loading} 
            className={`flex justify-center items-center py-[10px] gap-2 ${variants} ${sizes} ${className? className: ''}`}
            onClick={onClick}
        >
            { icon && icon.side === 'left' && 
                <Image
                    src={icon.src}
                    alt={icon.alt}
                    className={`w-[24px] h-[24px] ${icon.className? icon.className: ""}`}
                />
            }
            {children}
            { icon && icon.side === 'right' && 
                <Image
                    src={icon.src}
                    alt={icon.alt}
                    className={`w-[24px] h-[24px] ${icon.className? icon.className: ""}`}
                />
            }
        </button>
    )
}

export function FilterButton ({onClick, show}: {onClick: () => void, show: boolean}) {

    return (
        <Button 
            type="button" 
            size="medium" 
            icon={{src: CalenderIcon, alt: "calender", side: "left"}}
            variant="dark"
            onClick={onClick}
            className="relative"
        >
            This Month
            {show && (
                <ul className="absolute top-0 -right-40 w-30 bg-second-50 flex flex-col-reverse gap-4 rounded-xl px-5 py-2.5 border-second-40 border-1">
                    <li>3 days ago</li>
                    <li>7 days ago</li>
                    <li>yesterday</li>
                </ul>
            )}
        </Button>
    )
}

export function AddNewButton() {

    return (
        <Button 
            type="button" 
            size="medium"
            icon={{src: PlusIcon, alt: "add new", side: "left"}}
            className='active:scale-[0.769] transition-all duration-300'
        >
            New
        </Button>
    )
}