import { Container } from "./styles";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const Section = ({ children }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
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
