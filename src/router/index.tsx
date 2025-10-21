import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { LoginPage, ForgetPasswordPage, ForgetPasswordPage2, ResetPasswordPage, AuthNotFound, Dashboard, Testimonials, AddNewTestimonial, Quotes, Blog, CreateBlog, } from "../pages";
import { AppLoader } from "../loaders";
import { AuthLayout, DashboardLayout } from "../components/layout";
import ViewQuote from "../pages/quotes/viewQuote";



export default function AppRouter() {
    const router = createBrowserRouter([
    {
        path: '/cerebrohive-cms',
        children: [
            {
                Component: DashboardLayout,
                children: [
                    { index: true, Component: Dashboard },
                    {
                        path: "testimonials", 
                        children: [
                            {index: true, Component: Testimonials},
                            {path: "create-new", Component:AddNewTestimonial}
                        ]
                    },
                    {
                        path: "quotes",
                        children: [
                            {index: true, Component: Quotes},
                            {path: "view-quote", Component: ViewQuote}
                        ]
                    },
                    {
                        path: "blog",
                        children: [
                            {index: true, Component: Blog},
                            {path: "create-blog", Component: CreateBlog}
                        ]
                    }
                ]
            },
            {
                Component: AuthLayout,
                children: [
                    { 
                        path: 'auth',
                        children: [
                            {index: true, loader: AppLoader, Component: LoginPage },
                            { path: 'forgot-password', Component: ForgetPasswordPage },
                            { path: 'reset-link', Component: ForgetPasswordPage2 },
                            { path: 'reset-password', Component: ResetPasswordPage },
                            { path: "*", Component: AuthNotFound }
                        ]
                    },
                ]
            },
        ]
    },
    
    
    {
        path: '*',
        Component: AuthNotFound
    }
])
    return <RouterProvider router={router} />
}