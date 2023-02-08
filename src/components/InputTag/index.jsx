import { Container } from "./styles";
import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";

const InputTag = ({ onClick, onChange, ...rest }) => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Adicione um ingrediente"
        {...rest}
        onChange={onChange}
      />
      <AiOutlinePlus onClick={onClick} />
    </Container>
  );
};

InputTag.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default InputTag;
