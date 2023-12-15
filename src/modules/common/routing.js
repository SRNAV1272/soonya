import { Outlet } from "react-router-dom";
import LandingPage from "../layouts/LandingPage";
import Home from "../general/Home";
import Pricing from "../general/Pricing";
import SignIn from "../general/Signin";
import SignUp from "../general/Signup";
import Footer from "./Footer";
import Content from "../dashboard/pages/Content";
import Cards from "../dashboard/pages/Cards";
import OTP from "../dashboard/pages/OTP";
import Auth from "../dashboard/layout/Auth";
import Checkout from "../checkout/Checkout";
import Album from "../general/Shop";
import PageNotFound from "../dashboard/pages/PageNotFound";
import TermsAndConditions from "../sizes/TermsAndConditions";
import ShippingPolicies from "../sizes/ShippingPolicies";
import Return from "../sizes/Return";
import ReturnAndRefund from "../sizes/ReturnAndRefund";
import PrivacyPolicy from "../sizes/PrivacyPolicy";

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
            <Auth>
                {/* <DashboardLayout> */}
                <Outlet />
                {/* </DashboardLayout> */}
            </Auth>,
        children: [
            {
                path: 'content',
                element: <Content />
            }
        ]
    },
    {
        path: 'dashboard/preview',
        element: <Cards />
    },
    {
        path: 'checkout',
        element: <Checkout />
    },
    {
        path: 'shop',
        element: <Album />
    },
    {
        path: '*',
        element: <PageNotFound />
    },
    {
        path: '',
        element:
            <Footer>
                <Outlet />
            </Footer>,
        children: [
            {
                path: 'TermsAndConditions',
                element: <TermsAndConditions />
            },
            {
                path: 'ShippingPolicies',
                element: <ShippingPolicies />
            },
            {
                path: 'Return',
                element: <Return />
            },
            {
                path: 'ReturnAndRefund',
                element: <ReturnAndRefund />
            },
            {
                path: 'PrivacyPolicy',
                element: <PrivacyPolicy />
            }
        ]
    }
]