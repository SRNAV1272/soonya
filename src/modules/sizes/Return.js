import { Box, Grid } from "@mui/material";
import logo, { heightLogo } from "./Sizes";
import { useNavigate } from "react-router-dom";

export default function Return() {
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
                        <h1 style={{ textAlign: 'center' }}>Return</h1>
                        <div style={{ padding: '10px' }}>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}><strong data-mce-fragment="1">Return Policy for Tapwave NFC Card E-commerce</strong></p>
                            <p data-mce-fragment="1" style={{ textAlign: 'end' }}><strong data-mce-fragment="1">Last Updated:&nbsp;2 Nov 2023</strong></p>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}>At Tapwave, we want you to be satisfied with your purchase of NFC business cards. If you're not completely happy with your order, we're here to help. Please review our Return Policy for details on how to initiate a return.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">1. Eligibility for Returns</strong></p>
                            <p data-mce-fragment="1">You may be eligible for a return under the following conditions:</p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">You received a damaged or defective product.</li>
                                <li data-mce-fragment="1">The product you received is significantly different from what you ordered.</li>
                                <li data-mce-fragment="1">You received the wrong quantity of NFC business cards.</li>
                                <li data-mce-fragment="1">You have changed your mind and wish to return unopened and unused products within 14 days of receiving the order.</li>
                            </ul>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">2. Initiating a Return</strong></p>
                            <p data-mce-fragment="1">To initiate a return, please follow these steps:</p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">Contact our customer support team within 14 days of receiving your order.</li>
                                <li data-mce-fragment="1">Provide your order number, a detailed description of the issue, and any supporting evidence, such as photos, if applicable.</li>
                                <li data-mce-fragment="1">Our customer support team will guide you through the return process, including the issuance of a Return Merchandise Authorization (RMA) if necessary.</li>
                            </ul>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">3. Return Conditions</strong></p>
                            <p data-mce-fragment="1">For a return to be accepted, the product must meet the following conditions:</p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">The product is in its original, unopened packaging if you are returning it due to a change of mind.</li>
                                <li data-mce-fragment="1">The product is in the same condition as when it was received, without any damage or signs of use.</li>
                            </ul>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">4. Refund or Replacement</strong></p>
                            <p data-mce-fragment="1">Upon approval of your return, you can choose one of the following options:</p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">If you received a damaged or defective product, we will offer a full refund, including any shipping charges.</li>
                                <li data-mce-fragment="1">If the product is significantly different from what you ordered, you can choose between a replacement product or a full refund, including any shipping charges.</li>
                                <li data-mce-fragment="1">If you received the wrong quantity of NFC business cards, we will either send you the missing cards or offer a refund for the missing cards, including any shipping charges.</li>
                                <li data-mce-fragment="1">If you have changed your mind and are returning an unopened and unused product, we will issue a refund for the product cost, excluding shipping charges. Return shipping costs will be the responsibility of the customer.</li>
                            </ul>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">5. Refund Process</strong></p>
                            <p data-mce-fragment="1">Refunds will be processed as follows:</p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">For credit card payments, refunds will be credited to the original payment method.</li>
                                <li data-mce-fragment="1">For other payment methods, our customer support team will work with you to arrange the refund.</li>
                            </ul>
                            <p data-mce-fragment="1">Please allow up to 10 business days for the refund to be processed, depending on your payment method and financial institution.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">6. Contact Us</strong></p>
                            <p data-mce-fragment="1">If you need to initiate a return or have any questions about our return policy, please contact our customer support team:</p>
                            <p data-mce-fragment="1">Email - support@tapwave.in</p>
                            <p data-mce-fragment="1">We are committed to ensuring your satisfaction with our NFC business cards, and our return policy is designed to make the process as smooth as possible. If you have any concerns or issues, please don't hesitate to reach out, and we will do our best to assist you promptly.</p>
                        </div></div>
                </Grid>
            </Grid>
        </>
    )
}