import { useLocation } from "react-router"
import { Image } from "./image"
import { Link } from "react-router"


export type NavbarLinkProps = {
    icon: string
    href: string
    title: string
}
export function NavbarLink({icon, href, title}: NavbarLinkProps) {
    const location = useLocation()

    return (
        <Link to={href}>
            <li className={`flex px-[32px] py-[20px] gap-[4px] text-first-30 text-sm/[100%] font-normal items-center hover:bg-first-110 ${location.pathname === href? 'bg-first-110': ''}`}>
                <Image src={icon} alt={title} className="w-[24px] h-[24px]" />
                {title}
            </li>
        </Link>
    )
}