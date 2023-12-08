import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

export default function LandingPage() {

    return (
        <>
            <div style={{ width: '100%', position: 'fixed' }}>
                <Box
                    px={6}
                    py={2}
                >
                    <Navbar />
                </Box>
            </div>
            <Outlet />
        </>
    )
}