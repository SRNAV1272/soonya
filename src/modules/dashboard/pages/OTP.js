import React, { useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Avatar, Box, Button, Container, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from 'react-redux';
import logo, { heightLogo } from '../../sizes/Sizes';
import { Notify } from '../../reducer/Slices/Notification';
import { PostOTP } from '../../reducer/Slices/SignupSlice';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function OTP() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate()
    const handleChange = (event) => {
        setOtp(event);
    };
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.set('OTP', otp)
        if (otp.length < 5) { dispatch(Notify({ msg: 'Please Enter all the 5 Digits !' })); return }
        dispatch(PostOTP({ data, navigate }, { dispatch }))
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    pt={3}
                >
                    <img
                        height={heightLogo * 3}
                        src={logo}
                        style={{
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                        alt='logo'
                    />
                </Box>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" fontFamily={'Dosis'} fontWeight={600}>
                        OTP
                    </Typography>
                    <Box component="form" overflow={'auto'} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <MuiOtpInput value={otp} onChange={handleChange} length={5} width='100%' overflow={'auto'} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Verify
                        </Button>
                        <Grid container justifyContent={'end'} display={'flex'}>
                            <Grid item>
                                <Link href="/signup" variant="body2" fontFamily={'Dosis'} fontWeight={600} sx={{ textDecoration: 'none' }}>
                                    Back
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}