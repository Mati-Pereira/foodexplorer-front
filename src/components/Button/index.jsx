import { Container } from "./styles";
import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <Container>
      <button>{text}</button>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
