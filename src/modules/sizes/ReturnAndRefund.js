import { Box, Grid } from "@mui/material";
import logo, { heightLogo } from "./Sizes";
import { useNavigate } from "react-router-dom";

export default function ReturnAndRefund() {
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
                        <h1 style={{ textAlign: 'center' }}>Return And Refund</h1>
                        <div style={{ padding: '10px' }}>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}><strong data-mce-fragment="1">Return and Refund Policy for Tapwave NFC Card E-commerce</strong></p>
                            <p data-mce-fragment="1" style={{ textAlign: 'center' }}>At Tapwave, we are committed to providing you with high-quality NFC business cards and exceptional customer service. We understand that there may be instances where you need to return a product or request a refund. This policy outlines our procedures for returns and refunds to ensure a smooth and fair process.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">1. Returns</strong></p>
                            <p data-mce-fragment="1">We accept returns of NFC business cards under the following conditions:</p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">You received a damaged or defective product.</li>
                                <li data-mce-fragment="1">The product you received is significantly different from what you ordered.</li>
                                <li data-mce-fragment="1">You received the wrong quantity of NFC business cards.</li>
                                <li data-mce-fragment="1">You have changed your mind within 14 days of receiving the product, and the product is in its original, unopened packaging.</li>
                            </ul>
                            <p data-mce-fragment="1">To initiate a return, please contact our customer support team within 14 days of receiving your order. We may require you to provide photos or other evidence to support your return request.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">2. Refunds</strong></p>
                            <p data-mce-fragment="1">Upon approval of your return, we offer the following refund options:</p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">If you received a damaged or defective product, we will offer a full refund, including any shipping charges.</li>
                                <li data-mce-fragment="1">If the product is significantly different from what you ordered, you can choose between a replacement product or a full refund, including any shipping charges.</li>
                                <li data-mce-fragment="1">If you received the wrong quantity of NFC business cards, we will either send you the missing cards or offer a refund for the missing cards, including any shipping charges.</li>
                                <li data-mce-fragment="1">If you have changed your mind and the product is in its original, unopened packaging, we will issue a refund for the product cost, excluding shipping charges. Return shipping costs will be the responsibility of the customer.</li>
                            </ul>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">3. Refund Process</strong></p>
                            <p data-mce-fragment="1">Refunds will be processed as follows:</p>
                            <ul data-mce-fragment="1">
                                <li data-mce-fragment="1">For credit card payments, refunds will be credited to the original payment method.</li>
                                <li data-mce-fragment="1">For other payment methods, our customer support team will work with you to arrange the refund.</li>
                            </ul>
                            <p data-mce-fragment="1">Please allow up to 10 business days for the refund to be processed, depending on your payment method and financial institution.</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">4. Contact Us</strong></p>
                            <p data-mce-fragment="1">If you need to initiate a return or have any questions about our return and refund policy, please contact our customer support team:</p>
                            <p data-mce-fragment="1">Email - support@tapwave.in</p>
                            <p data-mce-fragment="1"><strong data-mce-fragment="1">Note:</strong> We reserve the right to amend this Return and Refund Policy at our discretion. Any changes to the policy will be updated on our website.</p>
                            <p data-mce-fragment="1">We are committed to ensuring your satisfaction with our NFC business cards. If you have any concerns or issues, please don't hesitate to reach out, and we will do our best to assist you promptly.</p>
                        </div></div>
                </Grid>
            </Grid>
        </>
    )
}