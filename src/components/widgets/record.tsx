import { Card, Section } from "../ui";
import QouteIcon from "../../assets/qoute.svg"
import ProductIcon from "../../assets/product.svg"
import ProjectIcon from "../../assets/portfolio.svg"
import PostIcon from "../../assets/blog.svg"

type CardProps = {
    title: string
    value: number
    icon: string
}
export function Records() {
    const cardRecords: CardProps[] = [
        {title: "qoutes", value: 32, icon: QouteIcon},
        {title: "products", value: 32, icon: ProductIcon},
        {title: "projects", value: 32, icon: ProjectIcon},
        {title: "posts", value: 32, icon: PostIcon},
    ] 

    return (
        <Section className="flex justify-between mb-[56px]">
            {cardRecords.map(item => <Card key={item.title} title={item.title} value={item.value} icon={item.icon} />)}
        </Section>
    )
}