import { UserAccount } from "./userAccount";

export function Header({title}: {title: string}) {

    return (
        <div className="text-first-20 flex justify-between h-[69px] border-b-1 z-[10000] bg-[#0A0E17] border-second-70 items-center px-[18px] py-[10px] sticky top-0 right-0 center">
            <h2 className="text-xl/[100%]">{title}</h2>
            <UserAccount 
                email="joshua.admin@cerebrohive.net"
                name="CerebroHive Admin"
                dropDown={true}
            />
        </div>
    )
}