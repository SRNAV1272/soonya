import { Grid, TextField, Typography } from "@mui/material";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import BasicAccordion from "./BasicAccordian";
import { h1 } from "../../sizes/Sizes";
import { useDispatch, useSelector } from "react-redux";
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { URLUpdate } from "../../reducer/Slices/ContentSlice";

export default function Content() {
    const dispatch = useDispatch()
    const { url } = useSelector(state => state.ContentReducers)
    const [URL, setURL] = React.useState(url)

    function UpdateURL() {
        dispatch(URLUpdate({ url: `${url}${URL}` }))
    }
    return (
        <>
            <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        fontFamily={'Dosis'}
                        color={'#747475'}
                        fontWeight={600}
                        fontSize={h1}
                        p={1}
                    >
                        Customise your page url
                    </Typography>
                    <Paper
                        component="form"
                        elevation={3}
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                    >
                        <Typography
                            fontFamily={'Dosis'}
                            color={'#4D77FA'}
                            p={1}
                        >
                            https://tapwave.com/
                        </Typography>
                        {/* </Button> */}
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <InputBase
                            sx={{ ml: 1, flex: 1, fontFamily: 'Dosis', fontWeight: '600', color: '#747475' }}
                            placeholder="Customise url"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e) => {
                                setURL(e.target.value)
                            }}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => UpdateURL()}>
                            <CloudSyncIcon />
                        </IconButton>
                    </Paper>
                    <TextField
                        disabled
                        sx={{
                            border: 'none',
                            "& fieldset": { border: 'none' },
                            fontFamily: 'Dosis'

                        }}
                        fullWidth
                        value={url}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    py={2}
                >
                    <BasicAccordion />
                </Grid>
            </Grid>
        </>
    )
}