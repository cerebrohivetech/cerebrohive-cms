// import { useState } from "react";

import { useState } from "react";
import { Section, FilterButton, AddNewButton } from "../ui";

// type FilterProps = "This Month" | "Last Month"
export function Chart() {
    const [show, setShow] = useState(false)
    const onClick = () => {
        setShow(!show)
    }
    return (
        <Section className="mt-[32px] mb-[56px]">
            <div className="w-full flex justify-between mb-[32px]">
                <FilterButton show={show} onClick={onClick}/>
                <AddNewButton />
            </div>
            <div className="bg-second-50 text-first-20 border-second-70 border-1 rounded-[8px] h-[482px]">
                <div className='border-b-1 border-second-70 h-[56px] flex items-center pl-[20px]'>
                    <h3 className='font-semibold text-base/[100%]'>Blog Traffic</h3>
                </div>
                <div>
                    {/* chart */}
                </div>
            </div>
        </Section>
    )
}