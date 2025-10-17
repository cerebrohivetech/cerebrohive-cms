import { Image } from "../ui";
import LogoImage from "../../assets/cerebro-logo-login.svg"

export function Logo({className}: {className: string}) {

    return (
        <Image src={LogoImage} alt="CerebroHive Logo" className={className} />
    )
}