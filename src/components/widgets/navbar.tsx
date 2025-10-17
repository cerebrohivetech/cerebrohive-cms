import { Link } from "react-router";
import { Logo, Image } from "../ui";
import ProfileImage from "../../assets/react.svg"
import DashboardIcon from "../../assets/dashboard.svg"
import QouteIcon from "../../assets/qoute.svg"
import ProductIcon from "../../assets/product.svg"
import PortfolioIcon from "../../assets/portfolio.svg"
import BlogIcon from "../../assets/blog.svg"
import TestimonialIcon from "../../assets/testimonials.svg"
import BrandIcon from "../../assets/brands.svg"
import TeamIcon from "../../assets/team.svg"
import { NavbarLink, type NavbarLinkProps } from "../ui";
import { UserAccount } from "./userAccount";


export function Navbar() {
    const navlist: NavbarLinkProps[] = [
        {icon: DashboardIcon, href: '/dashboard', title: "Dashboard"},
        {icon: QouteIcon, href: '/qoute', title: "Qoute"},
        {icon: ProductIcon, href: '/products', title: "Product"},
        {icon: PortfolioIcon, href: '/portfolio', title: "Portfolio"},
        {icon: TestimonialIcon, href: '/testimonials', title: "Testinonials"},
        {icon: BrandIcon, href: '/brands', title: "Brands"},
        {icon: TeamIcon, href: '/team', title: "Team"},
        {icon: BlogIcon, href: '/blog', title: " Blog"},
    ]

    return (
        <div className="w-[240px] h-full border-r-1 border-b-1 border-second-70">
            <div className=" py-[10px] pl-[11px] border-b-1 border-second-70">
                <Link to='/dashboard'>
                    <Logo className="w-[168px] h-[48px]" />
                </Link>
            </div>
            <div className="flex flex-col relative h-full">
                <nav>
                    <ul>
                        {navlist.map(linkItem => <NavbarLink key={linkItem.title} href={linkItem.href} icon={linkItem.icon} title={linkItem.title}/>)}
                    </ul>
                </nav>
                <div className="absolute bottom-[100px] h-[47px] flex items-center px-[32px] py-[20px] gap-[8px] text-first-30">
                    <Image src={ProfileImage} alt="User Avatar" className="w-[24px] h-[24px] bo items-center rounded-full" />
                    <UserAccount 
                        email="Joshua.admin@cerebrohive.net"
                        name="CerebroHive Admin"
                    />
                </div>
            </div>
        </div>
    )
}


