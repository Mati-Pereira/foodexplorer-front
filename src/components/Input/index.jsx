import { AiOutlineSearch } from "react-icons/ai";
import { Container, Label } from "./style";
import PropTypes from "prop-types";

const Input = ({ type, id, label, placeholder, icon }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div>
        {icon ? <AiOutlineSearch /> : null}
        <input type={type} id={id} placeholder={placeholder} />
      </div>
    </Container>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.bool,
};
