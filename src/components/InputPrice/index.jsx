import { Container, Label } from "./styles";
import PropTypes from "prop-types";
import { useState } from "react";

const InputPrice = ({ type, id, label, ...rest }) => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div>
        <input
          type={type}
          id={id}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          alt="Preço"
          placeholder="R$ 0,00"
          {...rest}
        />
      </div>
    </Container>
  );
};

InputPrice.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputPrice;
