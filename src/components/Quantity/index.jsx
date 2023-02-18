import { Container, Number } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";

const Quantity = ({ quantity = 1 }) => {
  const [quantityState, setQuantityState] = useState(quantity);
  return (
    <Container>
      <AiOutlineMinus
        onClick={() =>
          setQuantityState((prevQuantityState) => prevQuantityState - 1)
        }
      />
      <Number>{quantityState}</Number>
      <AiOutlinePlus
        onClick={() =>
          setQuantityState((prevQuantityState) => prevQuantityState + 1)
        }
      />
    </Container>
  );
};

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Quantity;
