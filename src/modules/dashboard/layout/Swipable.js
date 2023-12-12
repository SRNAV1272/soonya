import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Badge, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';

export default function SwipableDrawer() {
    const [state, setState] = React.useState(false);
    const navigate = useNavigate()

    function Logout() {
        navigate('/')
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, p: 2 }}
            role="presentation"
            onClick={() => setState(!state)}
            onKeyDown={() => setState(!state)}
        >

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Badge
                    sx={{
                        cursor: 'pointer'
                    }}
                    onClick={() => navigate('/dashboard/cards')}
                    badgeContent={4}
                    color="primary"
                >
                    <CreditCardIcon color="action" />
                </Badge>&emsp;&emsp;&emsp;
                <Avatar
                    sx={{
                        backgroundColor: '#5CE0E5',
                        p: 0.5
                    }}
                >
                    a
                </Avatar>&emsp;
                <Typography
                    fontFamily={'Dosis'}
                    color='#4D77FA'
                    fontWeight={600}
                    onClick={() => Logout()}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </Typography>
            </Box>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Badge
                    sx={{
                        cursor: 'pointer'
                    }}
                    onClick={() => navigate('/dashboard/cards')}
                    badgeContent={'200kb'}
                    color="primary"
                >
                    <StorageIcon />
                </Badge>
                <Button onClick={() => setState(!state)}>
                    <MenuIcon />
                </Button>
                <SwipeableDrawer
                    anchor={'bottom'}
                    open={state}
                    onClose={() => setState(!state)}
                    onOpen={() => setState(!state)}
                >
                    {list('bottom')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}