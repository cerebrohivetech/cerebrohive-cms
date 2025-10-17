import { Outlet } from "react-router";
import RootLayout from "./rootLayout";
import { Navbar } from "../widgets";


export default function DashboardLayout() {

    return (
        <RootLayout className="relative w-full h-dvh overflow-hidden flex font-main">
            <Navbar />
            <section className="w-[90%] h-full overflow-auto scroll-bar">
                <Outlet />
            </section>
        </RootLayout>
    )
}