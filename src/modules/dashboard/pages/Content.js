import { Grid, Typography } from "@mui/material";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import BasicAccordion from "./BasicAccordian";
import { h1 } from "../../sizes/Sizes";

export default function Content() {

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
                        {/* <Button sx={{ p: '10px' }} aria-label="menu"> */}
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
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                            <LanguageIcon />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    py={7}
                >
                    <BasicAccordion />
                </Grid>
            </Grid>
        </>
    )
}