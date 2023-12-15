import { Box, Grid } from "@mui/material";
import logo, { heightLogo } from "./Sizes";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
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
                        <h1 style={{ textAlign: 'center' }}>Privacy Policy</h1>
                        <div style={{ padding: '10px' }}>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}><strong data-mce-fragment="1">Privacy Policy for Tapwave NFC Card E-commerce</strong></p>
                            <p data-mce-fragment="1" style={{ textAlign: 'end' }}><strong data-mce-fragment="1">Last Updated: 2 Nov 2023&nbsp;</strong></p>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}>At Tapwave, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our website and purchase NFC business cards from us.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Information We Collect</strong></p>
                            <ol data-mce-fragment="1">
                                <li data-mce-fragment="1">
                                    <p data-mce-fragment="1"><strong data-mce-fragment="1">Personal Information:</strong> When you place an order or create an account with us, we may collect personal information, including your name, email address, shipping address, and payment information.</p>
                                </li>
                                <li data-mce-fragment="1">
                                    <p data-mce-fragment="1"><strong data-mce-fragment="1">Order Details:</strong> We collect information related to your orders, such as the products you purchase, order history, and order status.</p>
                                </li>
                                <li data-mce-fragment="1">
                                    <p data-mce-fragment="1"><strong data-mce-fragment="1">Communication:</strong> We may collect data from your communications with us, including emails, chat messages, or phone calls.</p>
                                </li>
                                <li data-mce-fragment="1">
                                    <p data-mce-fragment="1"><strong data-mce-fragment="1">Cookies and Tracking Technologies:</strong> We use cookies and other tracking technologies to collect data on your browsing behavior, such as your IP address, device type, and pages visited on our website.</p>
                                </li>
                            </ol>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">How We Use Your Information</strong></p>
                            <ol data-mce-fragment="1">
                                <li data-mce-fragment="1">
                                    <p data-mce-fragment="1"><strong data-mce-fragment="1">Order Fulfillment:</strong> We use your personal information to process and deliver your orders, manage your account, and provide customer support.</p>
                                </li>
                                <li data-mce-fragment="1">
                                    <p data-mce-fragment="1"><strong data-mce-fragment="1">Communication:</strong> We may use your contact information to communicate with you about your orders, provide updates, and respond to your inquiries.</p>
                                </li>
                                <li data-mce-fragment="1">
                                    <p data-mce-fragment="1"><strong data-mce-fragment="1">Marketing:</strong> With your consent, we may use your data to send you promotional offers, newsletters, and updates about our products and services. You can opt out of marketing communications at any time.</p>
                                </li>
                                <li data-mce-fragment="1">
                                    <p data-mce-fragment="1"><strong data-mce-fragment="1">Improvement of Services:</strong> We analyze your browsing behavior and order history to improve our website, services, and product offerings.</p>
                                </li>
                            </ol>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Data Security</strong></p>
                            <p data-mce-fragment="1">We take data security seriously and employ industry-standard security measures to protect your information. We use encryption for sensitive data, regularly update our security protocols, and restrict access to your personal information.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Sharing Your Information</strong></p>
                            <p data-mce-fragment="1">We do not sell, rent, or share your personal information with third parties for their marketing purposes. However, we may share your information with service providers, such as payment processors and shipping companies, to fulfill your orders.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Data Retention</strong></p>
                            <p data-mce-fragment="1">We retain your data for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Your Privacy Choices</strong></p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">You can access, update, or delete your personal information through your account settings.</li>
                                <li data-mce-fragment="1">You can opt out of marketing communications by following the unsubscribe instructions in our emails.</li>
                                <li data-mce-fragment="1">You can disable cookies through your browser settings.</li>
                            </ul>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Children's Privacy</strong></p>
                            <p data-mce-fragment="1">Our services are not intended for children under the age of 13. We do not knowingly collect or store information from children under 13.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Changes to this Privacy Policy</strong></p>
                            <p data-mce-fragment="1">We may update this Privacy Policy to reflect changes in our data practices or legal requirements. We will notify you of any significant changes through our website or other means.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Contact Us</strong></p>
                            <p data-mce-fragment="1">If you have questions or concerns about this Privacy Policy or your personal information, please contact our Data Protection Officer:</p>
                            <p data-mce-fragment="1">Email - support@tapwave.in</p>
                            <p data-mce-fragment="1">Thank you for trusting Tapwave with your NFC business card needs. We are committed to safeguarding your privacy and ensuring a secure and transparent experience when using our services.</p>
                        </div></div>
                </Grid>
            </Grid>
        </>
    )
}