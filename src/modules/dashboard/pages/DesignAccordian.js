import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, Grid } from '@mui/material';
import { h1 } from '../../sizes/Sizes';
import { useDispatch } from 'react-redux';
import { ContentUpdate } from '../../reducer/Slices/ContentSlice';

export default function DesignAccordian() {

    const fontFamily =
        [
            'Whisper',
            'Montserrat',
            'Nova Square',
            'Mulish',
            'Dosis',
            'Source Code Pro',
            'Space Grotesk',
            'Dancing Script',
            'Exo 2',
            'Ephesis',
            'Shadows Into Light',
            'Questrial',
            'Indie Flower'
        ]
    const dispatch = useDispatch()
    const [data, setData] = React.useState({
        style: ''
    })
    
    React.useEffect(() => {
        dispatch(ContentUpdate(data)) // eslint-disable-next-line
    }, [data])

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        fontFamily={'Dosis'}
                        fontWeight={600}
                    >
                        Font Style
                    </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ my: 2 }}>
                    <Grid
                        container
                        columnSpacing={1}
                    // justifyContent={'space-around'}
                    >
                        <Grid
                            item
                            xs={4}
                            sm={3}
                            md={2}
                            lg={1}
                            p={1}
                        >
                            <Box
                                px={1}
                                py={2}
                                border={`2px solid ${data?.style === '' ? '#4D77FA' : '#747475'}`}
                                borderRadius={4}
                                sx={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => setData(prev => {
                                    return {
                                        ...prev,
                                        style: ''
                                    }
                                })}
                            >
                                <Typography
                                    textAlign={'center'}
                                    fontFamily={'Roboto'}
                                    fontWeight={600}
                                    fontSize={h1 / 2}
                                >
                                    none
                                </Typography>
                            </Box>
                        </Grid>
                        {
                            fontFamily?.map((font, idx) => {
                                return (
                                    <>
                                        <Grid
                                            item
                                            xs={4}
                                            sm={3}
                                            md={2}
                                            lg={1}
                                            p={1}
                                            key={idx}
                                        >
                                            <Box
                                                px={1}
                                                py={2}
                                                border={`2px solid ${data?.style === font ? '#4D77FA' : '#747475'}`}
                                                borderRadius={4}
                                                sx={{
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => setData(prev => {
                                                    return {
                                                        ...prev,
                                                        style: font
                                                    }
                                                })}
                                            >
                                                <Typography
                                                    textAlign={'center'}
                                                    fontFamily={font}
                                                    fontWeight={600}
                                                    fontSize={h1 / 2}
                                                >
                                                    Aa
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </>
                                )
                            })
                        }
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ my: 2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        fontFamily={'Dosis'}
                        fontWeight={600}
                    >
                        Font color
                    </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ my: 2 }}>
                    <Grid
                        container
                        justifyContent={'space-around'}
                    >
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}