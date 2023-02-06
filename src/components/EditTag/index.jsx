import { Container } from "./styles";
import PropTypes from "prop-types";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const EditTag = ({ text, edit }) => {
  return (
    <Container>
      {text}
      {!edit ? <AiOutlineClose /> : <AiOutlinePlus />}
    </Container>
  );
};

EditTag.propTypes = {
  text: PropTypes.string.isRequired,
  edit: PropTypes.bool,
};

export default EditTag;
