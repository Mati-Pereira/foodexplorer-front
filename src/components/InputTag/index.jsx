import { Container } from "./styles";
import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";

const InputTag = ({ onClick, onChange, value, ...rest }) => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Adicionar"
        {...rest}
        onChange={onChange}
        value={value}
      />
      <AiOutlinePlus onClick={onClick} />
    </Container>
  );
};

InputTag.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputTag;
