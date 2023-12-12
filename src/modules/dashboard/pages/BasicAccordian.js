import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, Divider, Grid, InputAdornment, TextField } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useDispatch, useSelector } from 'react-redux';
import { ContentUpdate, UploadContent } from '../../reducer/Slices/ContentSlice';
import { useNavigate } from 'react-router-dom';
import { Notify } from '../../reducer/Slices/Notification';

export default function BasicAccordion() {
    const navigate = useNavigate()
    const content = useSelector(state => state.ContentReducers)
    const [data, setData] = React.useState({
        ...content
    })
    const dispatch = useDispatch()
    console.log(content)
    function ChangeText(e) {
        const { name, value } = e.target
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function Update() {
        dispatch(ContentUpdate(data))
    }

    function Save() {
        try {
            const newData = new FormData()
            Object.keys(data).forEach(item => {
                newData.set(`${item}`, data[item])
            })
            dispatch(UploadContent({ newData }, { dispatch }))
        } catch (e) {
            console.error(e)
            dispatch(Notify({ msg: 'Technical Error !' }))
        }
    }

    return (
        <div>
            <Box
                display={'flex'}
                justifyContent={'end'}
                alignItems={'center'}
                p={2}
            >
                <Button
                    variant='contained'
                    onClick={() => navigate('/dashboard/preview')}
                >
                    Preview
                </Button>&emsp;
                <Button
                    variant='contained'
                    onClick={() => Update()}
                >
                    Update
                </Button>&emsp;
                <Button
                    variant='contained'
                    onClick={() => Save()}
                >
                    Save
                </Button>
            </Box>
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
                        Profile
                    </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ my: 2 }}>
                    <Grid
                        container
                        justifyContent={'space-around'}
                    >
                        <Grid
                            item
                            xs={12}
                            md={5}
                        >
                            <Typography
                                fontFamily={'Dosis'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                py={2}
                            >
                                Profile Photo
                            </Typography>
                            <Box
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={
                                        data?.profile === null ?
                                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw&usqp=CAU"
                                            :
                                            data?.profile
                                    }
                                    sx={{ width: 56, height: 56 }}
                                />&emsp;
                                <input
                                    type='file'
                                    accept='image/*'
                                    id='profile'
                                    onChange={(e) => {
                                        console.log('files =>', e.target.files[0])
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                profile: URL.createObjectURL(e.target.files[0])
                                            }
                                        })
                                    }}
                                    style={{
                                        display: 'none'
                                    }}
                                />
                                <Avatar
                                    onClick={() => document.getElementById('profile').click()}
                                    sx={{
                                        backgroundColor: '#4D77FA',
                                        cursor: 'pointer',
                                        p: 1
                                    }}
                                >
                                    <FileUploadIcon />
                                </Avatar>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            py={2}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        onChange={ChangeText}
                                        error={data?.name === '' ? true : false}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="position"
                                        label="Position"
                                        name="position"
                                        onChange={ChangeText}
                                        error={data?.position === '' ? true : false}
                                        autoComplete="Position"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="company"
                                        label="Company"
                                        name="company"
                                        onChange={ChangeText}
                                        error={data?.company === '' ? true : false}
                                        autoComplete="company"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ my: 2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography
                        fontFamily={'Dosis'}
                        fontWeight={600}
                    >
                        Title
                    </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ my: 2 }}>
                    <Grid
                        item
                        xs={12}
                        py={2}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                    onChange={ChangeText}
                                    error={data?.title === '' ? true : false}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    multiline
                                    rows={3}
                                    label="Description"
                                    name="description"
                                    onChange={ChangeText}
                                    error={data?.description === '' ? true : false}
                                    autoComplete="Description"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ my: 2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography
                        fontFamily={'Dosis'}
                        fontWeight={600}
                    >
                        Contact
                    </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ my: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="phone no"
                                name="phone_no"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneAndroidIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                required
                                fullWidth
                                id="phone no"
                                label="phone no"
                                autoFocus
                                onChange={ChangeText}
                                error={data?.phone_no === '' ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                id="email"
                                label="email"
                                name="email"
                                onChange={ChangeText}
                                error={data?.email === '' ? true : false}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="Address"
                                name="address"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ApartmentIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                autoFocus
                                onChange={ChangeText}
                                error={data?.address === '' ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="city"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationCityIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                label="City"
                                name="city"
                                autoComplete="City"
                                onChange={ChangeText}
                                error={data?.city === '' ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ApartmentIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                id="state"
                                label="State"
                                name="state"
                                autoComplete="State"
                                onChange={ChangeText}
                                error={data?.state === '' ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FlagCircleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                id="country"
                                label="Country"
                                name="country"
                                autoComplete="Country"
                                onChange={ChangeText}
                                error={data?.country === '' ? true : false}
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ my: 2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography
                        fontFamily={'Dosis'}
                        fontWeight={600}
                    >
                        Social Media Links
                    </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ mt: 2 }} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <YouTubeIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                autoComplete="Youtube"
                                name="youtube"
                                required
                                fullWidth
                                id="youtube"
                                // label="youtube"
                                autoFocus
                                onChange={ChangeText}
                                error={data?.youtube === '' ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FacebookIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                autoComplete="facebook"
                                name="facebook"
                                required
                                fullWidth
                                id="facebook"
                                // label="youtube"
                                autoFocus
                                onChange={ChangeText}
                                error={data?.facebook === '' ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LinkedInIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                autoComplete="linkedin"
                                name="linkedin"
                                required
                                fullWidth
                                id="linkedin"
                                // label="youtube"
                                autoFocus
                                onChange={ChangeText}
                                error={data?.linkedin === '' ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <InstagramIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                autoComplete="instagram"
                                name="instagram"
                                required
                                fullWidth
                                id="instagram"
                                // label="youtube"
                                autoFocus
                                onChange={ChangeText}
                                error={data?.instagram === '' ? true : false}
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}