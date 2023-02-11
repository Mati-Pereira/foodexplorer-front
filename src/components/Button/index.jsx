import { Container } from "./styles";
import PropTypes from "prop-types";

const Button = ({ children, color, ...rest }) => {
  return (
    <Container color={color}>
      <button {...rest}>{children}</button>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
