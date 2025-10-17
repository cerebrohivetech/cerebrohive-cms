import { Image } from "../ui";
import ArrowdownIcon from "../../assets/arrow-down.svg"


export function UserAccount({name, email, dropDown}: {name: string, email: string, dropDown?: boolean}) {

    return (
        <div className="w-[190px] overflow-x-hidden flex gap-[10px] items-center">
            <div>
                <p className="font-semibold text-sm/[100%] text-first-20 mb-[7px]">{name.length < 20? name: name.slice(0, 15)+"..."}</p>
                <span className="font-normal text-sm/[100%] text-first-20">{email.length < 20? email: email.slice(0, 17)+"..."}</span>
            </div>
            {dropDown && (
                <Image src={ArrowdownIcon} alt="more info" />
            )}
        </div>
    )
}