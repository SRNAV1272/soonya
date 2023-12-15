import { Box, Grid } from "@mui/material";
import logo, { heightLogo } from "./Sizes";
import { useNavigate } from "react-router-dom";

export default function ShippingPolicies() {
    const navigate = useNavigate()
    return (
        <>
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
                    onClick={() => navigate('/')}
                />
            </Box>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} p={3}>
                    <div class="page">
                        <h1 style={{ textAlign: 'center' }}>Shipping Policy</h1>
                        <div style={{padding:'10px'}}>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}><strong data-mce-fragment="1">Shipping Policy for Tapwave NFC Card E-commerce</strong></p>
                            <p data-mce-fragment="1">At Tapwave, we are dedicated to providing you with a seamless and convenient shopping experience for our NFC business cards. This Shipping Policy outlines the essential information regarding the shipping of our products to help you understand the process.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">1. Shipping Locations</strong></p>
                            <p data-mce-fragment="1">We offer shipping for our NFC business cards to customers within the United States and internationally. Please note that shipping options, delivery times, and costs may vary depending on your location.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">2. Order Processing</strong></p>
                            <p data-mce-fragment="1">All orders are typically processed within 1-2 business days from the date of purchase. Our team will review and prepare your order for shipment during this time.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">3. Shipping Methods</strong></p>
                            <p data-mce-fragment="1">We offer a range of shipping methods to accommodate your needs. These options may include standard shipping, expedited shipping, and international shipping, depending on your location and preferences. The available shipping methods and associated costs will be displayed during the checkout process.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">4. Estimated Delivery Times</strong></p>
                            <p data-mce-fragment="1">The estimated delivery times may vary based on your location, chosen shipping method, and any unforeseen delays due to external factors. You will be provided with an estimated delivery date during the checkout process based on your selected shipping method.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">5. Order Tracking</strong></p>
                            <p data-mce-fragment="1">For your convenience, we provide order tracking information for all shipped orders. You will receive a confirmation email with a tracking number once your order has been shipped. You can use this tracking number to monitor the status and location of your package.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">6. Shipping Costs</strong></p>
                            <p data-mce-fragment="1">Shipping costs are determined by your location, the weight of the order, and the chosen shipping method. The shipping costs will be calculated and displayed during the checkout process, allowing you to review the total cost before confirming your order.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">7. Customs and Duties (International Orders)</strong></p>
                            <p data-mce-fragment="1">For international orders, please be aware that you may be responsible for any applicable customs duties, taxes, or import fees imposed by your country's authorities. These charges are not included in the product or shipping costs and are the responsibility of the recipient.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">8. Shipping Delays</strong></p>
                            <p data-mce-fragment="1">While we make every effort to ensure prompt delivery, shipping delays may occur due to factors beyond our control, such as adverse weather conditions or unforeseen transportation issues. If you experience a significant delay in your order, please contact our customer support team for assistance.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">9. Contact Us</strong></p>
                            <p data-mce-fragment="1">If you have any questions or require assistance related to our shipping policy, please do not hesitate to contact our customer support team:</p>
                            <p data-mce-fragment="1">Email - support@tapwave.in</p>
                            <p data-mce-fragment="1">We appreciate your trust in Tapwave for your NFC business card needs. We aim to provide you with a reliable and efficient shipping experience, and we're here to address any inquiries or concerns you may have regarding our shipping policy.</p>
                        </div></div>
                </Grid>
            </Grid>
        </>
    )
}