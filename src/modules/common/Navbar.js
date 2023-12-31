import { Box, Grid, Paper, Typography } from "@mui/material";
import SwipeableTemporaryDrawer from "../layouts/Drawer";
import Navlink from "./NavLinks";
import { useNavigate } from "react-router-dom";
import logo from '../../images/Tapwave.png'
import { heightLogo } from "../sizes/Sizes";

export default function Navbar() {
    const navigate = useNavigate()
    function Shop() {
        navigate('/shop')
    }
    return (
        <>
            <Grid
                container
                justifyContent={'space-between'}
                alignItems={'center'}
                component={Paper}
                elevation={0}
                sx={{
                    // boxShadow: '1px 1px 10px 10px #F2F2F4',
                    borderRadius: '12px',
                }}
                p={2}
            >
                <Grid
                    item
                    sm={2}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <img
                        height={heightLogo}
                        src={logo}
                        style={{
                            cursor: 'pointer'
                        }}
                        alt="logo"
                        onClick={() => { navigate('/'); }}
                    />
                </Grid>
                {
                    window.innerWidth < 860 ?
                        <>
                            <Grid
                                item
                                sm={8}
                                display={'flex'}
                                justifyContent={'end'}
                            >
                                <SwipeableTemporaryDrawer Shop={Shop} />
                            </Grid>
                        </>

                        :
                        <>
                            <Grid
                                item
                                sm={8}
                                display={'flex'}
                                justifyContent={'end'}
                                alignItems={'center'}
                            >
                                <Navlink Shop={Shop} />
                            </Grid>
                            <Grid
                                item
                                sm={2}
                                display={'flex'}
                                justifyContent={'end'}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: '#4E8EF3',
                                        cursor: 'pointer'
                                    }}
                                    py={1}
                                    px={2}
                                    borderRadius={'20px'}
                                    onClick={() => navigate('/signin')}
                                >
                                    <Typography
                                        fontFamily={'Source Code Pro'}
                                        color={'white'}
                                    >
                                        Login/Signup
                                    </Typography>
                                </Box>
                            </Grid>
                        </>
                }
            </Grid>
        </>
    )
}