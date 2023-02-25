import { Container, Label } from "./styles";
import PropTypes from "prop-types";

const Input = ({ type, id, label, placeholder, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div>
        <input type={type} id={id} placeholder={placeholder} {...rest} />
      </div>
    </Container>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.bool,
};
