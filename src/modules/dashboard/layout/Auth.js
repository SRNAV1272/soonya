import { Navigate, Outlet } from "react-router-dom"
import DashboardLayout from "./Layout"

export default function Auth() {

    return (
        <>
            {
                localStorage.getItem('token') ?
                    <DashboardLayout>
                        <Outlet />
                    </DashboardLayout>
                    :
                    <Navigate to={'/signin'} replace={true} />
            }
        </>
    )
}