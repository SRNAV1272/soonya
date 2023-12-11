import { Outlet } from "react-router-dom";
import LandingPage from "../layouts/LandingPage";
import Home from "../general/Home";
import Pricing from "../general/Pricing";
import SignIn from "../general/Signin";
import SignUp from "../general/Signup";
import Footer from "./Footer";
import DashboardLayout from "../dashboard/layout/Layout";
import Content from "../dashboard/pages/Content";
import Design from "../dashboard/pages/Design";
import Cards from "../dashboard/pages/Cards";
import OTP from "../dashboard/pages/OTP";

export const routes = [
    {
        path: '',
        element:
            <LandingPage>
                <Outlet />
            </LandingPage>,
        children: [
            {
                path: '',
                element:
                    <Footer>
                        <Outlet />
                    </Footer>
                ,
                children: [
                    {
                        path: '',
                        element: <Home />
                    },
                    {
                        path: 'Pricing',
                        element: <Pricing />
                    }
                ]
            },
            {
                path: 'Pricing',
                element: <Pricing />
            }
        ]
    },
    {
        path: 'signin',
        element:
            <Footer>
                <Outlet />
            </Footer>,
        children: [
            {
                path: '',
                element: <SignIn />
            }
        ]
    },
    {
        path: 'signup',
        element:
            <Footer>
                <Outlet />
            </Footer>,
        children: [
            {
                path: '',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'otp',
        element:
            <Footer>
                <Outlet />
            </Footer>,
        children: [
            {
                path: '',
                element: <OTP />
            }
        ]
    },
    {
        path: 'dashboard',
        element:
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>,
        children: [
            {
                path: 'content',
                element: <Content />
            },
            {
                path: 'design',
                element: <Design />
            }
        ]
    },
    {
        path: 'dashboard/preview',
        element: <Cards />
    }
]