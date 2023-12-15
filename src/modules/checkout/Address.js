import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm(props) {
    const { onChange, data } = props
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        value={data?.firstName}
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={onChange}
                        error={data?.firstName === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        value={data?.lastName}
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={onChange}
                        error={data?.lastName === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        value={data?.address1}
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={onChange}
                        error={data?.address1 === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        value={data?.address2}
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        onChange={onChange}
                        error={data?.address2 === '' ? true : false}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type='number'
                        id="phone_no"
                        value={data?.phone_no}
                        variant='standard'
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
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        value={data?.city}
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        onChange={onChange}
                        error={data?.city === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        value={data?.state}
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                        onChange={onChange}
                        error={data?.state === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        value={data?.zip}
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={onChange}
                        error={data?.zip === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        value={data?.country}
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        onChange={onChange}
                        error={data?.country === '' ? true : false}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}