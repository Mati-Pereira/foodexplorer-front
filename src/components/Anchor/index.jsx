import PropTypes from "prop-types";
import { Container } from "./styles";

const Anchor = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Anchor.propTypes = {
  children: PropTypes.node,
};

export default Anchor;
