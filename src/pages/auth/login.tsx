import { Link, useLoaderData, useNavigate } from "react-router";
import { Button, Input } from "../../components/ui";
import { AppLoader } from "../../loaders";


export default function LoginPage() {
    const data = useLoaderData() as ReturnType<typeof AppLoader>;
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/dashboard")
    }

    return (
        <>
            <div className="text-center mb-[40px]">
                <h3 className="text-2xl/[28px] font-semibold mb-2">Log in</h3>
                <p className="text-base/[24px]">Enter your details to lo in</p>
            </div>
            <form action={handleSubmit} className="flex flex-col w-[407px] relative">
                <Input 
                    label="Email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    value={data.username}
                    type="email"
                    onChange={()=> console.log("hello")}
                    required={true}
                />
                <Input 
                    label="Password"
                    name="password"
                    placeholder="**********"
                    value={data.password}
                    type="password"
                    onChange={()=> console.log("hello")}
                    required={true}
                />
                <Link to='/auth/forgot-password' className="text-first-30 text-sm/[22px] font-semibold block text-right relative -top-[15px] hover:underline">
                    Forget password?
                </Link>

                <Button type="submit" className="w-[80px] mx-auto mt-10">
                    Log in
                </Button>
            </form>
        </>
    )
}