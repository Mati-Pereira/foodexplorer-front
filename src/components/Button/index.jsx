import { Container } from "./styles";
import PropTypes from "prop-types";

const Button = ({ text, ...rest }) => {
  return (
    <Container>
      <button {...rest} type="submit">
        {text}
      </button>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
