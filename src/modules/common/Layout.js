import { useRoutes } from "react-router-dom"
import { routes } from "./routing"


export default function Layout() {
    const routing = useRoutes(routes)
    return (
        <>
            {
                routing
            }
        </>
    )
}