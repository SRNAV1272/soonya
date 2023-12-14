import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Copyright from './Copyright';
// TODO remove, this demo shouldn't need to reset the theme.

export default function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <Outlet />
            <Copyright />
        </Box>
    );
}