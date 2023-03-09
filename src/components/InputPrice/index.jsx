import { Container, Label } from "./styles";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";

const InputPrice = ({ type, id, label, value, onChange, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div>
        <NumericFormat
          type={type}
          id={id}
          alt="Preço"
          placeholder="R$ 0,00"
          value={value}
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          decimalScale={2}
          allowNegative={false}
          onValueChange={onChange}
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
  value: PropTypes.number,
};

export default InputPrice;
