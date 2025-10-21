import { Button, FileInput, Input, TextArea } from "../../ui";
import TopLeftIcon from "../../../assets/top-left.svg"

export function TestimonialForm() {

    return (
        <div>
            <div className="flex justify-between h-[87px] items-center px-[32px] border-b-1 border-second-70">
                <h4 className="font-semibold text-base/[100%] text-first-20">New Testimonial</h4>
                <Button type="button" variant="classic" icon={{src: TopLeftIcon, alt: "publish icon", side: "right"}}>Publish</Button>
            </div>
            <form action="" className="mx-[32px] my-[25px]">
                <Input 
                    label="Name"
                    name="name"
                    placeholder="Enter full name"
                    required={true}
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    // value=""
                />
                <FileInput
                    label="Image"
                    name="image"
                    placeholder="Upload image"
                    required={true}
                    type="file"
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    // value=""
                />
                <Input 
                    label="Company"
                    name="company"
                    placeholder="Enter company name"
                    required={true}
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    // value=""
                />
                <Input 
                    label="Position"
                    name="position"
                    placeholder="Enter position"
                    required={true}
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    // value=""
                />
                <TextArea 
                    label="Testimonial"
                    name="testimonial"
                    placeholder="Write testimonial here..."
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    // value=""
                />
            </form>
        </div>
    )
}