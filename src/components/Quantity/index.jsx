import { Container, Number } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";

const Quantity = ({ quantity = 10 }) => {
  return (
    <Container>
      <AiOutlineMinus />
      <Number>{quantity}</Number>
      <AiOutlinePlus />
    </Container>
  );
};

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Quantity;
