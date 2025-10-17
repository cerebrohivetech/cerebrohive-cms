import { Input, Button } from "../../components/ui";


export default function ResetPasswordPage() {

    return (
        <>
            <div className="text-center mb-[40px]">
                <h3 className="text-2xl/[28px] font-semibold mb-2">Reset Password</h3>
                <p className="text-base/[24px]">Enter your mail and a reset link will be sent</p>
            </div>
            <form action="" className="flex flex-col w-[407px] relative">
                <Input 
                    label="Password"
                    name="password"
                    placeholder="*********"
                    value=""
                    type="password"
                    onChange={()=> console.log("hello")}
                    required={true}
                />
                <Input 
                    label="Password reset"
                    name="passwordReset"
                    placeholder="**********"
                    value=""
                    type="password"
                    onChange={()=> console.log("hello")}
                    required={true}
                />

                <Button type="submit" className="w-[80px] mx-auto mt-10">
                    Reset
                </Button>
            </form>
        </>
    )
}