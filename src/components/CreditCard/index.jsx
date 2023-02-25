import { Container } from "./styles";
import Input from "../Input";
const CreditCard = () => {
  return (
    <Container>
      <Input
        id="card-number"
        label="Número do Cartão"
        placeholder="0000 0000 0000 0000"
        type="text"
      />
    </Container>
  );
};

export default CreditCard;
