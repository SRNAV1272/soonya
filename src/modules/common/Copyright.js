import { Avatar, Box, Divider, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { h1 } from "../sizes/Sizes";
import MailIcon from '@mui/icons-material/Mail';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Copyright(props) {
    return (
        <>
            <Divider sx={{ p: 2 }} />
            <Box sx={{ bgcolor: 'white', py: 4 }} component="footer">
                <Grid
                    container
                    justifyContent={'space-around'}
                    alignItems={'center'}
                >
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        lg={3}
                        py={3}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Box>
                            <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }} fontSize={h1 / 2.5} fontFamily={'Dosis'} fontWeight={600}>Term And Conditions</Typography>
                            <Typography sx={{ cursor: 'pointer' }} fontSize={h1 / 2.5} fontFamily={'Dosis'} fontWeight={600}>Return</Typography>
                            <Typography sx={{ cursor: 'pointer' }} fontSize={h1 / 2.5} fontFamily={'Dosis'} fontWeight={600}>Return And Refund</Typography>
                            <Typography sx={{ cursor: 'pointer' }} fontSize={h1 / 2.5} fontFamily={'Dosis'} fontWeight={600}>Privacy Policies</Typography>
                            {/* <Typography fontSize={h1 / 1.5} fontFamily={'Dosis'} fontWeight={600}>Return</Typography> */}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        lg={3}
                        py={3}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Box>
                            <Avatar sx={{ width: h1, height: h1 }}>
                                <LocationOnIcon sx={{ fontSize: h1 / 2 }} />
                            </Avatar>
                        </Box>&emsp;
                        <Box>
                            <Typography fontSize={h1 / 1.5} fontFamily={'Dosis'} fontWeight={600}>Address</Typography>
                            <Typography fontSize={h1 / 3} fontFamily={'Dosis'} fontWeight={600}>Banglore</Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        lg={3}
                        py={3}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Box>
                            <Avatar sx={{ width: h1, height: h1 }}>
                                <MailIcon sx={{ fontSize: h1 / 2 }} />
                            </Avatar>
                        </Box>&emsp;
                        <Box>
                            <Typography fontSize={h1 / 1.5} fontFamily={'Dosis'} fontWeight={600}>Email</Typography>
                            <Typography fontSize={h1 / 3} fontFamily={'Dosis'} fontWeight={600}>support@tapwave.in</Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        lg={3}
                        py={3}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Box>
                            <Avatar sx={{ width: h1, height: h1 }}>
                                <ConnectWithoutContactIcon sx={{ fontSize: h1 / 2 }} />
                            </Avatar>
                        </Box>&emsp;
                        <Box>
                            <Typography fontSize={h1 / 1.5} fontFamily={'Dosis'} fontWeight={600}>Social Media</Typography>
                            <Box
                                width={100}
                            >
                                <InstagramIcon sx={{ fontSize: h1 / 2, cursor: 'pointer' }} />&ensp;
                                <LinkedInIcon sx={{ fontSize: h1 / 2, cursor: 'pointer' }} />&ensp;
                                <TwitterIcon sx={{ fontSize: h1 / 2, cursor: 'pointer' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary" fontFamily='Questrial' fontWeight='600' align="center" {...props}>
                    {'Copyright © '}
                    <Link color="inherit" href="https://mui.com/">
                        Your Website
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        </>
    );
}