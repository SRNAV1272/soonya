import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { heightLogo } from '../sizes/Sizes';
import logo from '../../images/Tapwave.png'
import { useDispatch } from 'react-redux';
import { CreateUser } from '../reducer/Slices/SignupSlice';
import { Notify } from '../reducer/Slices/Notification';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = React.useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (!/^[6-9]\d{9}$/gi.test(data.get('phone_no'))) {
            dispatch(Notify({ msg: 'Please Enter a Valid Number !' }))
            setData(prev => {
                return {
                    ...prev,
                    phone_no: ''
                }
            })
            return
        }
        if (data.get('firstName') === '' || data.get('firstName') === undefined) { dispatch(Notify({ msg: 'Please Enter a First Name !' })); return }
        if (data.get('lastName') === '' || data.get('lastName') === undefined) { dispatch(Notify({ msg: 'Please Enter a Last Name !' })); return }
        if (data.get('password') === '' || data.get('password') === undefined) { dispatch(Notify({ msg: 'Please Enter a Password !' })); return }

        dispatch(CreateUser({ data, navigate }, { dispatch }))
    };

    function onChange(e) {
        const { name, value } = e.target
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" fontFamily='Questrial' fontWeight='600' variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={onChange}
                                    error={data?.firstName === '' ? true : false}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={onChange}
                                    error={data?.lastName === '' ? true : false}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type='number'
                                    id="phone_no"
                                    label="Phone Number"
                                    name="phone_no"
                                    autoComplete="phone_no"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                                    }}
                                    // error={}
                                    sx={{
                                        "& input[type=number]": {
                                            MozAppearance: "textfield",
                                        },
                                        "& input[type=number]::-webkit-outer-spin-button": {
                                            WebkitAppearance: "none",
                                            margin: 0,
                                        },
                                        "& input[type=number]::-webkit-inner-spin-button": {
                                            WebkitAppearance: "none",
                                            margin: 0,
                                        }
                                    }}
                                    onChange={onChange}
                                    error={data?.phone_no === '' ? true : false}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={onChange}
                                    error={data?.password === '' ? true : false}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={() => navigate('/signin')} sx={{ cursor: 'pointer', fontFamily: 'Questrial', fontWeight: '600' }} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}