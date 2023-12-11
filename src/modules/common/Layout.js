import { useRoutes } from "react-router-dom"
import { routes } from "./routing"
import { Backdrop, CircularProgress } from "@mui/material"
import SimpleSnackbar from "./Notification"
import { useSelector } from "react-redux"

export default function Layout() {
    const routing = useRoutes(routes)
    const { load } = useSelector(state => state.LoadingReducer)
    return (
        <>
            <SimpleSnackbar />
            {
                routing
            }
            < Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }
                }
                open={load}
            >
                <CircularProgress color="inherit" />
            </Backdrop >
        </>
    )
}