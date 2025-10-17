import { Image } from "./image";


export function Card({title, value, icon}: {title: string, value: number, icon:string}) {

    return (
        <div className="flex gap-[18px] w-[271px] h-[104px] bg-second-50 border-second-70 border-1 rounded-[8px] justify-start pl-[20px] items-center">
            <div className="w-[48px] h-[48px] rounded-full bg-first-90 flex items-center justify-center">
                <Image src={icon} alt="icon" className="w-[30px] h-[30px]" />
            </div>
            <div className="flex flex-col gap-1.5">
                <p className="font-normal text-sm/[100%] text-first-30">All time {title}</p>
                <h3 className="font-semibold text-xl/snug text-first-20">{value} {title}</h3>
            </div>
        </div>
    )
}