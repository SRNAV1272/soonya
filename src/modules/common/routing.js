import { Outlet } from "react-router-dom";
import LandingPage from "../layouts/LandingPage";
import Home from "../general/Home";
import Pricing from "../general/Pricing";
import SignIn from "../general/Signin";
import SignUp from "../general/Signup";
import Footer from "./Footer";

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
    }
]