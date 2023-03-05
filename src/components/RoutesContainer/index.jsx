import PropTypes from "prop-types";
import { Container } from "./styles";

const RoutesContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

RoutesContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default RoutesContainer;
