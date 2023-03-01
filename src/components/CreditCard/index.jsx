import { Container, SecondRow } from "./styles";
import { useState } from "react";
import InputOrder from "../InputOrder";
import Button from "../Button";
import pedidos from "/pedidos.svg";
import { useTheme } from "styled-components";
import PropTypes from "prop-types";

const CreditCard = ({ onSubmit }) => {
  const {
    colors: { red_500 },
  } = useTheme();
  const [expire, setExpire] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");

  const handleExpireChange = (event) => {
    const input = event.target.value;
    let formattedInput = input;
    formattedInput = formattedInput.replace(/\D/g, "");
    if (formattedInput.length > 2) {
      formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(
        2
      )}`;
    }
    setExpire(formattedInput);
  };

  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    const formatted = input
      .substring(0, 16)
      .split("")
      .reduce((result, digit, index) => {
        if (index % 4 === 0 && index > 0) {
          result += " ";
        }
        result += digit;
        return result;
      }, "");

    setCardNumber(formatted);
  };

  const handleCvcChange = (event) => {
    const { value } = event.target;
    const formattedSSN = value.replace(/\D/g, "").substring(0, 3);
    setCvc(formattedSSN);
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <InputOrder
          id="card-number"
          label="Número do Cartão"
          placeholder="0000 0000 0000 0000"
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          required
        />
        <SecondRow>
          <InputOrder
            id="card-holder"
            label="Validade"
            type="text"
            maxLength={5}
            placeholder="MM/YY"
            onChange={handleExpireChange}
            value={expire}
            required
          />
          <InputOrder
            id="card-cvc"
            label="CVC"
            type="text"
            maxLength={3}
            placeholder="000"
            onChange={handleCvcChange}
            value={cvc}
            required
          />
        </SecondRow>

        <Button color={red_500} type="submit">
          <img src={pedidos} alt="icon pedidos" />
          Pedido
        </Button>
      </form>
    </Container>
  );
};

CreditCard.propTypes = {
  onSubmit: PropTypes.func,
};

export default CreditCard;
