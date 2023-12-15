import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { h1 } from '../sizes/Sizes';

const defaultTheme = createTheme();
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

export default function Review() {
    const { cartItems } = useSelector(state => state.CartReducer)
    const { address } = useSelector(state => state.CartReducer)

    function TotalAmount() {
        let total = 0
        cartItems?.forEach((item) => {
            total = total + parseFloat(item.totalItemPrice)
        })
        return total
    }

    console.log(address)

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <main>
                    <Container maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cartItems.map((card) => (
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
                                        </CardActions>
                                        <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button size="small" startIcon={<CurrencyRupeeIcon />}>
                                                <span style={{ fontFamily: 'Dosis', fontWeight: '600', color: '#516A8B' }}>
                                                    {card.totalItemPrice}
                                                </span>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>



            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2, textDecoration: 'underline' }} fontFamily={'Dosis'} fontWeight={600}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom fontFamily={'Dosis'} fontWeight={600}>
                        {address?.firstName}&ensp;{address?.lastName}
                    </Typography>
                    <Typography gutterBottom fontFamily={'Dosis'} fontWeight={600}>
                        {address?.address1},&ensp;{address?.address2}
                    </Typography>
                    <Typography gutterBottom fontFamily={'Dosis'} fontWeight={600}>
                        {address?.city},&ensp;{address?.state},&ensp;{address?.zip},&ensp;{address?.country}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'end'}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2, textDecoration: 'underline' }} fontFamily={'Dosis'} fontWeight={600}>
                        Total
                    </Typography>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <CurrencyRupeeIcon />&ensp;
                        <Typography gutterBottom fontFamily={'Dosis'} fontSize={h1} color={'#1565C0'} fontWeight={600}>{TotalAmount(cartItems)}</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                >
                    Place order
                </Button>
            </Box>
        </React.Fragment >
    );
}