import { Container } from "./styles";
import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";

const InputTag = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <input type="text" />
      <AiOutlinePlus />
    </Container>
  );
};

InputTag.propTypes = {
  text: PropTypes.string.isRequired,
  edit: PropTypes.bool,
};

export default InputTag;
