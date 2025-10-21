import { Button, FileInput, Input, TextArea } from "../../ui";
import ArrowdownIcon from "../../../assets/arrow-down.svg"

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

export function QuoteForm() {

    return (
        <div>
            <div className="flex justify-between h-[87px] items-center px-[32px] border-b-1 border-second-70">
                <h4 className="font-semibold text-base/[100%] text-first-20">View Quote</h4>
                <Button type="button" variant="dark" icon={{src: ArrowdownIcon, alt: "publish icon", side: "right"}}>Assign status</Button>
            </div>
            <form action="" className="mx-[32px] my-[25px]">
                <Input 
                    label="Company Name"
                    name="companyName"
                    required={true}
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    value="PayPal"
                />
                <Input
                    label="Phone Number"
                    name="phoneNumber"
                    required={true}
                    type="tel"
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    value="123-456-7890"
                />
                <Input 
                    label="Email"
                    name="email"
                    required={true}
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    value="john.doe@example.com"
                />
                <Input 
                    label="Project Category"
                    name="projectCategory"
                    required={true}
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    value="Web App."
                />
                <TextArea 
                    label="Project Description"
                    name="testimonial"
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    value={text}
                />
                <FileInput
                    label="PRD Document"
                    name="prdDocument"
                    required={true}
                    type="file"
                    placeholder="Download PRD"
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                />
            </form>
        </div>
    )
}