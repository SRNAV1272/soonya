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
import { Login } from '../reducer/Slices/SigninSlice';
import { Notify } from '../reducer/Slices/Notification';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const navigate = useNavigate()
    const [data, setData] = React.useState({})
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (!/^[6-9]\d{9}$/gi.test(data.get('phone_no')) || data.get('phone_no') === '') {
            dispatch(Notify({ msg: 'Please Enter a Valid Number !' }))
            setData(prev => {
                return {
                    ...prev,
                    phone_no: ''
                }
            })
            return
        }
        if (data.get('password') === '' || data.get('password') === undefined) { dispatch(Notify({ msg: 'Please Enter a Password !' })); return }

        dispatch(Login({ data, navigate }, { dispatch }))
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
                    <Typography component="h1" variant="h5" fontFamily='Questrial' fontWeight='600'>
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                        <TextField
                            required
                            fullWidth
                            sx={{ my: 2 }}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            onChange={onChange}
                            error={data?.password === '' ? true : false}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link onClick={() => navigate('/')} sx={{ cursor: 'pointer', fontFamily: 'Questrial', fontWeight: '600' }} variant="body2">
                                    Back
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={() => navigate('/signup')} sx={{ cursor: 'pointer', fontFamily: 'Questrial', fontWeight: '600' }} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}