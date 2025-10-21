import { Data, Row, Section, Table, Image, FilterButton, AddNewButton, Button } from "../../ui";
import ActionMenu from "../../../assets/dots-menu.svg"
import TopLeftIcon from "../../../assets/top-left.svg"
import { useState } from "react";



export function BlogTable() {
    const [showPublished, setShowPublished] = useState(true)
    const data = [
        ["Blog Title", "Date Added", "Category", "Actions"],
        ["Argon", "WebApp", "+44 987 5674", ""],
        ["Meta", "Meta AI", "+1 654 555 432", ""],
        ["Tesla", "Micro Chip", "+66 7897 9876", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", ""],
        ["Argon", "WebApp", "+44 987 5674", ""],
        ["Meta", "Meta AI", "+1 654 555 432", ""],
        ["Tesla", "Micro Chip", "+66 7897 9876", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", ""],
    ]
    const handleChange = (value: boolean) => {
        setShowPublished(value)
    }

    return (
        <>
        <div className="flex justify-between h-[87px] items-center px-[32px] border-b-1 border-second-70">
            <FilterButton show={false} onClick={() => 1}/>
            <div className="flex gap-3">
                <Button 
                    variant="dark"
                    type="button"
                    size="small"
                    icon={{src: TopLeftIcon, alt: "go to product page", side: "right", className: "!w-[20px] !h-[20px]"}}
                    className="!text-first-10"
                >
                    View product page
                </Button>
                <AddNewButton />
            </div>
        </div>
        <Section className="mb-[56px] mt-[32px]">
            <div className="w-full border-b-1 border-second-70 mb-[32px] [&>span]:px-[16px] [&>span]:py-[12px] [&>span]:block flex">
                <span onClick={() => handleChange(true)} className={`text-sx/[100%] border-first-30 duration-75 transition-all ease-in cursor-pointer ${showPublished === true? "font-[500] text-first-30 border-b-1": "font-normal text-[#667CAD]"}`}>
                    Published
                </span>
                <span onClick={() => handleChange(false)} className={`text-sx/[100%] border-first-30 duration-75 transition-all ease-in cursor-pointer ${showPublished === false? "font-[500] text-first-30 border-b-1": "font-normal text-[#667CAD]"}`}>
                    Drafts
                </span>
            </div>

            <Table className="w-full bg-second-50 border-1 border-second-70 rounded-[8px] text-sm/[100%] text-first-30">
                {data.map((row, index) => (
                    index === 0? 
                    <Row head={true} key={index}>
                        {row.map((item, index) => (
                            index === 3? 
                            <Data key={item} className="!justify-end">
                                {item}
                            </Data>
                            :<Data key={item}>
                                {item}
                            </Data>
                        ))}
                    </Row>
                    : <Row key={index}>
                        {row.map((item, index) => (
                            index === 0?
                            <Data key={item}>
                                <div>
                                    <p className="font-semibold text-first-20 mb-2">{item}</p>
                                    <span>danieludumajos@gmail.com</span>
                                </div>
                            </Data>:
                            index === 3?
                            <Data key={item} className="!justify-end">
                                    <Image src={ActionMenu} alt="actions" className="w-[24px] h-[24px]"/>
                                </Data>:
                            <Data key={item}>
                                {item}
                            </Data>
                        ))}
                        </Row>
                ))}
            </Table>
        </Section>
        </>
    )
}