import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../reducer/Slices/CartSlice';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Cards() {
    const { cartItems } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    console.log(cartItems)

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Container maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4} justifyContent={'space-around'}>
                        {
                            cartItems?.length > 0 ?
                                cartItems.map((card) => (
                                    <Grid item key={card} xs={12} sm={6} md={6} lg={4}>
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
                                            </CardActions>
                                            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <CardActions
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Button size="small" onClick={() => dispatch(RemoveFromCart(card))}>
                                                        <RemoveCircleOutlineIcon />
                                                    </Button>
                                                    <span style={{ fontFamily: 'Dosis', fontWeight: '600', color: '#516A8B' }}>
                                                        {card.quantity}
                                                    </span>
                                                    <Button size="small" onClick={() => dispatch(AddToCart(card))}>
                                                        <ControlPointIcon />
                                                    </Button>
                                                </CardActions>
                                                <Button size="small" startIcon={<CurrencyRupeeIcon />}>
                                                    <span style={{ fontFamily: 'Dosis', fontWeight: '600', color: '#516A8B' }}>
                                                        {card.totalItemPrice}
                                                    </span>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                                :
                                <Typography component="h1" variant="h4" align="center" py={10} fontFamily={'Dosis'} fontWeight={'600'}>
                                    Add Cards to Cart !
                                </Typography>
                        }
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}