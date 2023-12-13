import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Review from './Review';
import AddressForm from './Address';
import Copyright from '../common/Copyright';
import { heightLogo } from '../sizes/Sizes';
import logo from '../sizes/Sizes';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from '../reducer/Slices/Notification';
import { CreateUser } from '../reducer/Slices/SignupSlice';

const steps = ["Cart Items", 'Shipping address', 'Review your order'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { cartItems } = useSelector(state => state.CartReducer)


  const dispatch = useDispatch()

  const [data, setData] = React.useState({})
  const navigate = useNavigate(-1)
  const handleNext = () => {
    let next = false
    if (activeStep === 0) setActiveStep(activeStep + 1);
    Object.keys(data).forEach(item => {
      if (data[item] === '') {
        next = true
        dispatch(Notify({ msg: `Please Enter a ${item} !` }));
        return
      }
    })
    if (!next && Object.keys(data).length === 8)
      setActiveStep(activeStep + 1);

    if (Object.keys(data).length < 8) dispatch(Notify({ msg: `Please fill all the Fields !` }));
  };

  React.useEffect(() => {
    console.log(data)
  }, [data])

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function onChange(e) {
    const { name, value } = e.target
    setData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  // eslint-disable-next-line
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!/^[6-9]\d{9}$/gi.test(data.get('phone_no'))) {
      dispatch(Notify({ msg: 'Please Enter a Valid Number !' }))
      setData(prev => {
        return {
          ...prev,
          phone_no: ''
        }
      })
      return
    }
    if (data.get('firstName') === '' || data.get('firstName') === undefined) { dispatch(Notify({ msg: 'Please Enter a First Name !' })); return }
    if (data.get('lastName') === '' || data.get('lastName') === undefined) { dispatch(Notify({ msg: 'Please Enter a Last Name !' })); return }

    dispatch(CreateUser({ data, navigate }, { dispatch }))
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              height={heightLogo * 2}
              src={logo}
              style={{
                cursor: 'pointer',
                textAlign: 'center'
              }}
              alt='logo'
            />
          </Box>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Button
              variant='outlined'
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" fontFamily={'Dosis'} fontWeight={'600'}>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  <span
                    style={{ fontFamily: 'Dosis', fontWeight: '600' }}
                  >
                    {label}
                  </span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {
              activeStep === 0 ? <Cards /> :
                activeStep === 1 ? <AddressForm data={data} setData={setData} onChange={onChange} /> :
                  <Review />
            }
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              {
                activeStep < steps.length - 1 &&
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={cartItems?.length === 0 ? true : false}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              }
            </Box>
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}