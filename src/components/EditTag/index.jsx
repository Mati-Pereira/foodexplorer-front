import { Container } from "./styles";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";

const EditTag = ({ text, onClick, ...rest }) => {
  return (
    <Container>
      {text}
      <AiOutlineClose onClick={onClick} {...rest} />
    </Container>
  );
};

EditTag.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EditTag;
