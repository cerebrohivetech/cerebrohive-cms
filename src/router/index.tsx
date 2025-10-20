import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { LoginPage, ForgetPasswordPage, ForgetPasswordPage2, ResetPasswordPage, AuthNotFound, Dashboard, Testimonials } from "../pages";
import { AppLoader } from "../loaders";
import { AuthLayout, DashboardLayout } from "../components/layout";



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
                        Component: Testimonials,
                        children: [
                            {path: "create-new", element: <h1>Hello world</h1>}
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