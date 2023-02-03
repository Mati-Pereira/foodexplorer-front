import { Container } from "./styles";
import PropTypes from "prop-types";

const Tag = ({ text }) => {
  return <Container>{text}</Container>;
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
