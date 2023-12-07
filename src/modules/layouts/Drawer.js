import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navlink from '../common/NavLinks';
import { Typography } from '@mui/material';

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={() => setState(!state)}
            onKeyDown={() => setState(!state)}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end'
                }}
            >
                <Button onClick={() => setState(!state)}>
                    <CloseIcon />
                </Button>
            </Box>
            <List
                sx={{
                    display: 'flex',
                    flexDirection: `${window.innerWidth < 540 ? 'column' : 'row'}`,
                    justifyContent: `${window.innerWidth < 540 ? 'center' : 'space-around'}`,
                    alignItems: 'center'
                }}
            >
                <Navlink />
                <Box
                    sx={{
                        backgroundColor: '#4E8EF3',
                        cursor: 'pointer',
                        marginTop: `${window.innerWidth < 540 && '20px'}`,
                    }}
                    py={1}
                    px={2}
                    borderRadius={'20px'}
                >
                    <Typography
                        fontFamily={'Source Code Pro'}
                        color={'white'}
                    >
                        Login/Signup
                    </Typography>
                </Box>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                {
                    !state &&
                    <Button onClick={() => setState(!state)}>
                        <MenuIcon />
                    </Button>
                }
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