import { Container } from "./styles";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";

const EditTag = ({ text, ...rest }) => {
  return (
    <Container {...rest}>
      {text}
      <AiOutlineClose />
    </Container>
  );
};

EditTag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EditTag;
