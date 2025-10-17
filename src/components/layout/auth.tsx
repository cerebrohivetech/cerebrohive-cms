import RootLayout from "./rootLayout";
import { Logo } from "../ui";
import { Outlet } from "react-router";

export default function AuthLayout() {

    return (
        <RootLayout>
            <section className="flex flex-col justify-start items-center gap-10 w-full h-dvh p-4 bg bg-[url(/bg-image.svg)]">
                <Logo className="w-[461px] h-[124px]" />
            
                <Outlet />
            </section>
        </RootLayout>
    )
}