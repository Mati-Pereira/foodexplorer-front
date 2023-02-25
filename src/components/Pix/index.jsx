import { Container } from "./styles";
import QRCode from "qrcode.react";

const Pix = () => {
  return (
    <Container>
      <QRCode size={256} value={"NÃO FUNCIONA!"} />
    </Container>
  );
};

export default Pix;
