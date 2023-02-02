import { Container } from "./styles";
import PropTypes from "prop-types";
import Slider from "react-carousel-styled";

const Section = ({ children }) => {
  return (
    <Container>
      <h2>Section</h2>
      <Slider>{children}</Slider>
    </Container>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
