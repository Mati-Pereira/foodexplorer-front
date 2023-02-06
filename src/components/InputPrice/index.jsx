import { Container, Label } from "./styles";
import PropTypes from "prop-types";

const InputPrice = ({ type, id, label }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div>
        <input type={type} id={id} defaultValue="R$ 0,00" />
      </div>
    </Container>
  );
};

InputPrice.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InputPrice;
