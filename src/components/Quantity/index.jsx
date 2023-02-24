import { Container, Number } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";

const Quantity = ({ quantity, handleAddQuantity, handleRemoveQuantity }) => {
  return (
    <Container>
      <AiOutlineMinus onClick={handleRemoveQuantity} />
      <Number>{quantity}</Number>
      <AiOutlinePlus onClick={handleAddQuantity} />
    </Container>
  );
};

Quantity.propTypes = {
  quantity: PropTypes.number,
  handleAddQuantity: PropTypes.func,
  handleRemoveQuantity: PropTypes.func,
};

export default Quantity;
