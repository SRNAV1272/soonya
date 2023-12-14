import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../common/Copyright';
import logo, { heightLogo } from '../sizes/Sizes';
import { useNavigate } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../reducer/Slices/CartSlice';

const cards = [
    {
        title: 'Classic Nfc Buisness Card',
        url: 'https://tapwave.in/cdn/shop/files/Untitleddesign_74_5710a803-e7af-4126-94d9-f719304c2597.png?v=1700765741&width=600',
        price: '1999',
        disprice: '599'
    },
    {
        title: 'Classic Pattern Nfc Buisness Card',
        url: 'https://tapwave.in/cdn/shop/files/73.png?v=1700842676&width=600',
        price: '1999',
        disprice: '699'
    },
    {
        title: 'Designer Nfc Card for Interior Designers',
        url: 'https://tapwave.in/cdn/shop/files/41.png?v=1700842889&width=600',
        price: '1999',
        disprice: '699'
    },
    {
        title: 'Designer Nfc Card one',
        url: 'https://tapwave.in/cdn/shop/files/3_8d65a5a1-a85c-4a67-b35f-9c1bf48e5342.png?v=1700775500&width=600',
        price: '1999',
        disprice: '799'
    },
    {
        title: 'Designer Nfc Smart Card vintage',
        url: 'https://tapwave.in/cdn/shop/files/7.png?v=1700769059&width=600',
        price: '1999',
        disprice: '999'
    }
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    const { cartItems } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    console.log(cartItems)
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Box
                        sx={{
                            display: 'flex',
                            // flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <img
                            height={heightLogo * 1.2}
                            src={logo}
                            style={{
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}
                            alt='logo'
                        />
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Badge
                                sx={{
                                    cursor: 'pointer'
                                }}
                                badgeContent={cartItems?.length}
                                onClick={() => navigate('/checkout')}
                                color="secondary"
                            >
                                <ShoppingCartCheckoutIcon color="action" sx={{ color: 'white' }} />
                            </Badge>&emsp;&emsp;&emsp;
                            <Button
                                variant='outlined'
                                sx={{ color: 'white' }}
                                onClick={() => navigate(-1)}
                            >
                                Back
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 2,
                        pb: 4,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            fontFamily={'Dosis'}
                        >
                            Cards
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            p: 1,
                                            backgroundColor: '#282438',
                                            borderRadius: 20,
                                            color: 'white'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Dosis',
                                                fontWeight: '600'
                                            }}
                                        >
                                            {
                                                ((parseFloat(card.disprice) / parseFloat(card.price)) * 100).toFixed(0)
                                            } %
                                        </span>
                                    </Box>
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image={card.url}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2" fontFamily={'Dosis'} fontWeight={600}>
                                            {card.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Button size="small" startIcon={<CurrencyRupeeIcon />}>
                                            {card.disprice}&emsp;
                                            <span style={{ textDecoration: 'line-through', fontFamily: 'Dosis', fontWeight: '600', color: '#516A8B' }}>
                                                {card.price}
                                            </span>
                                        </Button>
                                        <Button size="small" onClick={() => dispatch(AddToCart(card))}>
                                            <AddShoppingCartIcon />
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Copyright />
            {/* End footer */}
        </ThemeProvider>
    );
}