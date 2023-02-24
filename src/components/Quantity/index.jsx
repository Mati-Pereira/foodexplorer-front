import { Container, Number } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Container>
      <AiOutlineMinus onClick={handleRemoveQuantity} />
      <Number>{quantity}</Number>
      <AiOutlinePlus onClick={handleAddQuantity} />
    </Container>
  );
};

export default Quantity;
