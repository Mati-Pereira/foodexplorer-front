import { Container } from "./styles";
import QRCode from "qrcode.react";
import { useEffect } from "react";

const Pix = () => {
  // eslint-disable-next-line no-unused-vars
  function handleQRCodeScan() {
    console.log("QR code scanned!");
  }
  const qrCodeUrl = "myapp://handleQRCodeScan";
  useEffect(() => {
    const handleCustomUrlScheme = (event) => {
      const url = event.url;

      if (url.startsWith("myapp://")) {
        const functionName = url.substring(9); // remove the custom scheme
        window[functionName](); // call the function
      }
    };
    window.addEventListener("load", handleCustomUrlScheme);
    return () => {
      window.removeEventListener("load", handleCustomUrlScheme);
    };
  }, []);
  return (
    <Container>
      <QRCode value={qrCodeUrl} />
    </Container>
  );
};

export default Pix;
