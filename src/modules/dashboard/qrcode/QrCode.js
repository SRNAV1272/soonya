
import QRCode from "react-qr-code";

export default function QrCode(props) {
    const { url } = props
    return (
        <>
            <div style={{
                height: "auto",
                margin: "0 auto",
                width: "25%",
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '10px'
            }}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={url ? url : 'https://tapewave.inF'}
                    viewBox={`0 0 256 256`}
                />
            </div>
        </>
    )
}