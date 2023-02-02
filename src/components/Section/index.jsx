import { Container } from "./styles";
import PropTypes from "prop-types";

const Section = ({ children }) => {
  return (
    <Container>
      <h2>Section</h2>
      {children}
    </Container>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
