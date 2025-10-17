import { Data, Row, Section, Table, Image } from "../../ui";
import DownloadIcon from "../../../assets/download.svg"

export function LatestQouteTable() {
    const data = [
        ["Company", "Category", "Phone Number", "PRD"],
        ["Argon", "WebApp", "+44 987 5674", "link1"],
        ["Meta", "Meta AI", "+1 654 555 432", "link2"],
        ["Tesla", "Micro Chip", "+66 7897 9876", "link3"],
        ["Microsoft", "Embedded system", "+234 808 556 986 ", "Plink4RD"],
        ["Microsoft", "Embedded system", "+234 808 556 986 ", "Plink4RD"],
        ["Microsoft", "Embedded system", "+234 808 556 986 ", "Plink4RD"],
    ]

    return (
        <Section className="mb-[56px]">
            <h3 className="text-base/[100%] font-semibold text-first-20 mb-[32px]">Latest Qoutes</h3>

            <Table className="w-full bg-second-50 border-1 border-second-70 rounded-[8px] text-sm/[100%] text-first-30">
                {data.map((row, index) => (
                    index === 0? 
                    <Row head={true} key={index}>
                        {row.map(item => (
                            <Data key={item}>
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
                                    <span>All time projects</span>
                                </div>
                            </Data>:
                            index === 3?
                            <Data key={item} url={item}>
                                PRD
                                <Image src={DownloadIcon} alt="download" className="w-[24px] h-[24px]"/>
                            </Data>:
                            <Data key={item}>
                                {item}
                            </Data>
                        ))}
                        </Row>
                ))}
            </Table>
        </Section>
    )
}
