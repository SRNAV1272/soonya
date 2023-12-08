import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    const { key, data } = props
    return (
        <Card sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }} key={key} >
            <img
                width={216}
                height={118}
                src={data?.url}
                alt={data?.title}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily={'Space Grotesk'}
                    fontWeight={'600'}
                >
                    {data?.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily={'Montserrat'}
                    fontWeight={'600'}
                >
                    {data?.description}
                </Typography>
            </CardContent>
        </Card >
    );
}