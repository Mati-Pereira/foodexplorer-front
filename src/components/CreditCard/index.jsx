import { Container, SecondRow } from "./styles";
import Input from "../Input";
import { useState } from "react";
const CreditCard = () => {
  function handleInput(event) {
    const [date, setDate] = useState("");

    const input = event.target.value;

    // Remove non-numeric characters
    const numericInput = input.replace(/\D/g, "");

    // Format input with leading zero if necessary
    let formattedInput = numericInput;
    if (/^[2-9]$/.test(numericInput.charAt(0))) {
      formattedInput = "0" + formattedInput;
    }

    // Check if input is a valid date
    const month = formattedInput.slice(0, 2);
    const year = formattedInput.slice(2);
    const maxMonth = year === "" ? 12 : 1;
    if (month > maxMonth) {
      return;
    }

    // Update state with formatted input
    setDate(formattedInput);
  }
  return (
    <Container>
      <Input
        id="card-number"
        label="Número do Cartão"
        placeholder="0000 0000 0000 0000"
        type="text"
      />
      <SecondRow>
        <Input
          id="card-holder"
          label="Vencimento do cartão"
          type="text"
          placeholder="MM/YY"
          value={date}
          onChange={handleInput}
        />
        <Input />
      </SecondRow>
    </Container>
  );
};

export default CreditCard;
