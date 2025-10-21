import { Button, FileInput, Input, TextArea } from "../../ui";
import TopLeftIcon from "../../../assets/top-left.svg"

export function BlogForm() {

    return (
        <div>
            <div className="flex justify-between h-[87px] items-center px-[32px] border-b-1 border-second-70">
                <h4 className="font-semibold text-base/[100%] text-first-20">New Blog</h4>
                <div className="flex gap-3">
                    <Button 
                        variant="dark"
                        type="button"
                        size="small"
                        icon={{src: TopLeftIcon, alt: "go to product page", side: "right", className: "!w-[20px] !h-[20px]"}}
                        className="!text-first-10"
                    >
                        Save as draft
                    </Button>
                    <Button type="button" variant="classic" icon={{src: TopLeftIcon, alt: "publish icon", side: "right"}}>Publish</Button>
                </div>
            </div>

            <form action="" className="mx-[32px] my-[45px]">
                <Input 
                    label="Author's Name"
                    name="authorName"
                    placeholder="Paypal"
                    required={true}
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    // value=""
                />
                <FileInput
                    label="Author's Image"
                    name="authorImage"
                    placeholder="Upload image"
                    required={true}
                    type="file"
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    // value=""
                />
                <FileInput 
                    label="Hero Image"
                    name="heroImage"
                    placeholder="Upload image"
                    required={true}
                    className="!flex-row justify-between items-start"
                    width="!w-[924px]"
                    // value=""
                />
            </form>
        </div>
    )
}