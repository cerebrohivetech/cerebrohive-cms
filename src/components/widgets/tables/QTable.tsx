import { Data, Row, Section, Table, Image, FilterButton, AddNewButton } from "../../ui";
import ActionMenu from "../../../assets/dots-menu.svg"
import DownloadIcon from "../../../assets/download.svg"


export function QuotesTable() {
    const data = [
        ["Company", "Product category", "Phone Number", "PRD", "action"],
        ["Argon", "WebApp", "+44 987 5674", "", ""],
        ["Meta", "Meta AI", "+1 654 555 432", "", ""],
        ["Tesla", "Micro Chip", "+66 7897 9876", "", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", "", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", "", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", "", ""],
        ["Argon", "WebApp", "+44 987 5674", "", ""],
        ["Meta", "Meta AI", "+1 654 555 432", "", ""],
        ["Tesla", "Micro Chip", "+66 7897 9876", "", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", "", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", "", ""],
        ["Microsoft", "Embedded system", "+234 808 556 986", "", ""],
    ]

    return (
        <Section className="mb-[56px] mt-[32px]">
            <div className="w-full flex justify-between mb-[32px]">
                <FilterButton show={false} onClick={() => 1}/>
                <AddNewButton />
            </div>

            <Table className="w-full bg-second-50 border-1 border-second-70 rounded-[8px] text-sm/[100%] text-first-30">
                {data.map((row, index) => (
                    index === 0? 
                    <Row head={true} key={index}>
                        {row.map((item, index) => (
                            index === 4? 
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
                            <Data key={item} url={item}>
                                PRD
                                <Image src={DownloadIcon} alt="download" className="w-[24px] h-[24px]"/>
                            </Data>:
                            index === 4?
                                <Data key={item} className="!justify-end">
                                    <Image src={ActionMenu} alt="actions" className="w-[24px] h-[24px]"/>
                                </Data>
                            :<Data key={item}>
                                {item}
                            </Data>
                        ))}
                        </Row>
                ))}
            </Table>
        </Section>
    )
}