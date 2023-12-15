import { Box, Grid } from "@mui/material";
import logo, { heightLogo } from "./Sizes";
import { useNavigate } from "react-router-dom";

export default function TermsAndConditions() {
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
                        <h1 style={{ textAlign: 'center' }}>Terms Of Service</h1>
                        <div style={{padding:'10px'}}>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}><strong data-mce-fragment="1">Terms of Service for Tapwave NFC Card E-commerce</strong></p>
                            <p data-mce-fragment="1" style={{ textAlign: 'end' }}><strong data-mce-fragment="1">Last Updated:&nbsp;2 Nov 2023</strong></p>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}>Please read these Terms of Service carefully before using our website and purchasing NFC business cards from Tapwave. By accessing and using our website and services, you agree to be bound by these terms and conditions.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">1. Acceptance of Terms</strong></p>
                            <p data-mce-fragment="1">By using our website and making a purchase, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please refrain from using our website and services.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">2. Use of the Website</strong></p>
                            <p data-mce-fragment="1">You agree to use our website for lawful purposes only. You may not use our website for any illegal or unauthorized activities, and you must comply with all applicable laws and regulations.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">3. Account Registration</strong></p>
                            <p data-mce-fragment="1">To place orders and access certain features on our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, and you agree to accept responsibility for all activities that occur under your account.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">4. Product Information</strong></p>
                            <p data-mce-fragment="1">We make every effort to provide accurate and up-to-date product information on our website. However, we do not guarantee the accuracy of such information and reserve the right to correct any errors, omissions, or inaccuracies.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">5. Ordering and Payment</strong></p>
                            <p data-mce-fragment="1">By placing an order, you agree to provide accurate and complete information. You are responsible for any fees, taxes, and shipping costs associated with your order. Payment is due at the time of order placement.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">6. Shipping and Delivery</strong></p>
                            <p data-mce-fragment="1">Shipping and delivery details are outlined in our Shipping Policy. We are not responsible for any delays or issues that occur once the product is in the hands of the shipping carrier.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">7. Returns and Refunds</strong></p>
                            <p data-mce-fragment="1">Our Return and Refund Policy outlines the conditions under which you may return products and request refunds. Please refer to that policy for details.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">8. Intellectual Property</strong></p>
                            <p data-mce-fragment="1">All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Tapwave and is protected by copyright and other intellectual property laws. You may not use our content without our written permission.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">9. Privacy</strong></p>
                            <p data-mce-fragment="1">Your use of our website is also governed by our Privacy Policy. Please review that policy to understand how we collect, use, and protect your data.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">10. Disclaimers</strong></p>
                            <p data-mce-fragment="1">We make no warranties or representations about the accuracy, reliability, or completeness of the information on our website. Your use of our website and its content is at your own risk.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">11. Limitation of Liability</strong></p>
                            <p data-mce-fragment="1">To the fullest extent permitted by applicable law, Tapwave and its officers, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of our website or the purchase of our products.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">12. Indemnification</strong></p>
                            <p data-mce-fragment="1">You agree to indemnify and hold Tapwave harmless from any claims, losses, liabilities, and expenses arising out of your use of our website and services.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">13. Changes to Terms</strong></p>
                            <p data-mce-fragment="1">We reserve the right to update or modify these Terms of Service at any time. The most recent version will be posted on our website, and the date of the latest revision will be indicated.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">14. Contact Us</strong></p>
                            <p data-mce-fragment="1">If you have any questions or concerns about these Terms of Service, please contact us:</p>
                            <p data-mce-fragment="1">Email - support@tapwave.in</p>
                            <p data-mce-fragment="1">Thank you for using Tapwave for your NFC business card needs. We appreciate your compliance with these Terms of Service, which help ensure a fair and transparent experience for all users.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}