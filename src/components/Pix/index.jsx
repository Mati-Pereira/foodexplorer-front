import { Container } from "./styles";
import QRCode from "qrcode.react";

function MyFunction() {
  console.log("Function called!");
}

const Pix = () => {
  function handleScan() {
    MyFunction();
  }
  return (
    <Container>
      <QRCode value={MyFunction} size={256} onClick={handleScan} />
    </Container>
  );
};

export default Pix;
