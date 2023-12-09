import { Box, Grid, Typography } from "@mui/material";
import tem1 from '../../images/card_home_plate.jpg'
import MediaCard from "../common/Card";
import QrCode from "../dashboard/qrcode/QrCode";
import { h1 } from "../sizes/Sizes";
import React from "react";

export default function Home() {
    return (
        <>
            <Grid
                container
            >
                <Grid
                    item
                    sm={12}
                    lg={6}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    order={window.innerWidth < 1200 ? 2 : 1}
                >
                    <Box
                        p={2}
                    >
                        <Typography
                            fontFamily={'Space Grotesk'}
                            fontWeight={'600'}
                            color={'#818181'}
                            pb={3}
                        >
                            Create Digital Visiting Card
                        </Typography>
                        <Typography
                            fontFamily={'Montserrat'}
                            fontWeight={'600'}
                            fontSize={h1}
                            pb={3}
                        >
                            Future of Networking with &nbsp;
                            <span
                                style={{
                                    color: '#5FE0E5',
                                }}
                            >
                                tapwave
                            </span> &nbsp;
                            Smart Digital Business Card
                        </Typography>
                        <Typography
                            fontFamily={'Questrial'}
                            fontWeight={'600'}
                            color={'#486284'}
                        >
                            Create your Personal Virtual Business Card and Manage your Contacts in the Next 5 MINUTES!
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    order={window.innerWidth < 1200 ? 1 : 2}
                >
                    <img
                        src={tem1}
                        width={'100%'}
                        height={window.innerHeight - 10}
                        alt="tem1"
                        style={{
                            borderRadius: '20px'
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                container
            >
                <Grid
                    item
                    xs={12}
                >
                    <QrCode />
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent={'space-around'}
                px={5}
                py={5}
                id='Features'
            >
                <Grid
                    item
                    sm={12}
                >
                    <Typography
                        fontFamily={'Space Grotesk'}
                        fontWeight={'600'}
                        color={'#888888'}
                        variant="p"
                    >
                        HOW
                        &nbsp;
                        <span
                            style={{
                                color: '#5FE0E5',
                            }}
                        >
                            tapwave
                        </span> &nbsp;
                        WORKS :-
                    </Typography>
                </Grid>
                <Grid
                    item
                    sm={12}
                    pt={4}
                    pb={4}
                >
                    <Box width={window.innerWidth < 1200 ? '100%' : '70%'}>
                        <Typography
                            fontFamily={'Montserrat'}
                            fontWeight={'500'}
                            color={'#486284'}
                            // fontSize={30}
                            fontSize={h1 / 1.2}
                        >
                            &nbsp;
                            <span
                                style={{
                                    color: '#5FE0E5',
                                }}
                            >
                                tapwave
                            </span> &nbsp;
                            Allows You to Create, Exchange, Store & Organize Your Business Contacts Without Any Hassles.
                        </Typography>
                    </Box>
                </Grid>

                {
                    [
                        {
                            url: 'https://assets-global.website-files.com/64f2f28d9c0d653c3c8afe27/6540b5034c775eb025ba1ca5_home.svg',
                            title: 'Your Phone = Your Business Card',
                            description: 'Much like printed cards, you have to constantly carry your NFC card everywhere (phew!). But your tapwave Card is always with you on your phone.'
                        },
                        {
                            url: 'https://assets-global.website-files.com/64f2f28d9c0d653c3c8afe27/653f9db076acfe5e5f8cc93e_element-banner-03-1-min.png',
                            title: 'Save, Segment, and Organise Your Contacts',
                            description: 'tapwave Digital Card is paired with a comprehensive contact management software while your NFC card is…just a card.'
                        },
                        {
                            url: 'https://assets-global.website-files.com/64f2f28d9c0d653c3c8afe27/6549cbf5e2f2e8a845ea40a9_cost-effewctive%20(1).svg',
                            title: 'A Cost Effective Solution',
                            description: 'While you can build your Digital Business Card for free, even our most advanced paid plan is at a price point lower than the cost of printing ONE customised NFC Card.'
                        }
                    ].map((data, id) => {
                        return (
                            <>
                                <Grid
                                    key={id}
                                    item
                                    xs={12}
                                    md={5}
                                    lg={4}
                                    mt={2}
                                    rowSpacing={2}
                                    p={window.innerWidth > 1024 && 2}
                                >
                                    <MediaCard key={id} data={data} />
                                </Grid >
                            </>
                        )
                    })
                }
            </Grid >
        </>
    )
}