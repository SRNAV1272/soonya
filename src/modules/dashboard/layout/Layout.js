import { Avatar, Badge, Box, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import { heightLogo } from "../../sizes/Sizes";
import logo from '../../../images/Tapwave.png'
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { h1 } from "../../sizes/Sizes";
import React, { useEffect } from "react";
import Copyright from "../../common/Copyright";
import SwipableDrawer from "./Swipable";
import Mobile from "./Mobile";
import { useDispatch, useSelector } from "react-redux";
import StorageIcon from '@mui/icons-material/Storage';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Notify } from "../../reducer/Slices/Notification";
import { GetCards } from "../../reducer/Slices/ContentSlice";


function stringToColor(string) {
    let hash = 0;
    let i;
    console.log(string)
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    console.log(name)
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name?.split(' ')[0][0]}${name?.split(' ').length > 1 && name?.split(' ')[1][0]}`,
    };
}


export default function DashboardLayout() {
    const navigate = useNavigate()
    const indecies = {
        content: 0,
        design: 1,
    }
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.ContentReducers)
    const path = useLocation()
    const [value, setValue] = React.useState(indecies[path.pathname.split('/')[2]]);

    useEffect(() => {
        try {
            console.log('Get Cards !')
            // eslint-disable-next-line
            dispatch(GetCards({}, { dispatch }))
        } catch (e) {
            // eslint-disable-next-line
            dispatch(Notify({ msg: e.response.data.msg }))
        }
    }, [dispatch])
    console.log(name)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    function Logout() {
        localStorage.clear('token')
        navigate('/signin')
    }
    return (
        <>
            <Grid
                container
            >
                <Grid
                    item
                    xs={12}
                    position={'fixed'}
                    width={'100%'}
                    display={'flex'}
                    zIndex={10}
                    borderRadius={10}
                    sx={{
                        backgroundColor: '#FCFCFE'
                    }}
                    px={3}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            height={heightLogo * 2}
                            src={logo}
                            style={{
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}
                            alt='logo'
                            onClick={() => navigate('/')}
                        />
                    </Box>
                    {
                        window.innerWidth < 860 ?
                            <SwipableDrawer />
                            :
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: `${window.innerWidth < 400 ? 'column' : 'row'}`,
                                    alignItems: 'center',
                                }}
                            >
                                <Badge
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => navigate('/dashboard/cards')}
                                    badgeContent={'200kb'}
                                    color="primary"
                                >
                                    <StorageIcon />
                                </Badge>&emsp;&ensp;
                                <Badge
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => navigate('/dashboard/cards')}
                                    color="primary"
                                >
                                    <ShoppingBagIcon color="action" />
                                </Badge>&emsp;&emsp;&emsp;
                                <Avatar
                                    {...stringAvatar(name === undefined ? "Name" : name)}
                                    sx={{
                                        backgroundColor: '#5CE0E5',
                                        // p: 1
                                    }}
                                />&emsp;
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
                    }
                </Grid>
                <Grid
                    item
                    xs={12}
                    mt={13}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            sx={{
                                backgroundColor: '#4D77FA',
                                p: 1
                            }}
                        >
                            <CreditCardIcon sx={{ fontSize: `${h1}px` }} />
                        </Avatar>
                        <Typography
                            fontFamily={'Dosis'}
                            fontWeight={600}
                        >
                            Digital Business Cards
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    py={2}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label={<Typography fontFamily={'Dosis'} fontWeight={600}>Content</Typography>} {...a11yProps(0)} onClick={() => navigate('/dashboard/content')} />
                            {/* <Tab label="Design" {...a11yProps(1)} onClick={() => navigate('/dashboard/design')} /> */}
                        </Tabs>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent={'center'}
            >
                <Grid
                    item
                    xs={12}
                    md={8}
                    p={2}
                    component={Paper}
                    borderRadius={5}
                    border={'1px solid #747475'}
                >
                    <Outlet />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    p={1}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={window.innerWidth < 900 && 'center'}
                >
                    <Mobile />
                </Grid>
            </Grid >
            <Box
                p={5}
            >
                <Copyright />
            </Box>
        </>
    )
}