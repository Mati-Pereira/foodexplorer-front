import { Container } from "./styles";
import PropTypes from "prop-types";

const Button = ({ text, color, ...rest }) => {
  return (
    <Container color={color}>
      <button {...rest} type="submit">
        {text}
      </button>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
