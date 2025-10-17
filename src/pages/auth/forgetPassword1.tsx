
import { Button, Input } from "../../components/ui";


export default function LoginPage() {

    return (
        <>
            <div className="text-center mb-[40px]">
                <h3 className="text-2xl/[28px] font-semibold mb-2">Forget Password</h3>
                <p className="text-base/[24px]">Enter your details to reset your password</p>
            </div>
            <form action="" className="flex flex-col w-[407px] relative">
                <Input 
                    label="Email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    value=""
                    type="email"
                    onChange={()=> console.log("hello")}
                    required={true}
                />

                <Button type="submit" className="w-[80px] mx-auto mt-10 text-center">
                    Submit
                </Button>
            </form>
        </>
    )
}