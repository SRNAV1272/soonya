import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import SwipeableTemporaryDrawer from "../layouts/Drawer";
import Navlink from "./NavLinks";


export default function Navbar() {

    return (
        <>
            <Grid
                container
                justifyContent={'space-between'}
                alignItems={'center'}
                component={Paper}
                elevation={0}
                sx={{
                    boxShadow: '2px 2px 20px 20px #F2F2F4',
                    borderRadius: '12px'
                }}
                p={2}
            >
                <Grid
                    item
                    sm={2}
                >
                    <Typography fontFamily={'Nova Square'} color="#EEC515">Soonya</Typography>
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
                            <SwipeableTemporaryDrawer />
                        </Grid>
                    </>
                        
                        :
                        <>
                            <Grid
                                item
                                sm={8}
                                display={'flex'}
                                justifyContent={'space-around'}
                                alignItems={'center'}
                            >
                                <Navlink />
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