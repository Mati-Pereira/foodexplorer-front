import PropTypes from "prop-types";
import { Container } from "./styles";

const Anchor = ({ text, ...rest }) => {
  return <Container {...rest}>{text}</Container>;
};

Anchor.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Anchor;
