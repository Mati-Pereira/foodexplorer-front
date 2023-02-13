import { Container, Label } from "./styles";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";

const InputPrice = ({ type, id, label, onChange, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div>
        <NumericFormat
          type={type}
          id={id}
          placeholder="R$ 0,00"
          prefix={"R$ "}
          decimalSeparator=","
          thousandSeparator="."
          valueIsNumericString
          decimalScale={2}
          allowedDecimalSeparators={[","]}
          onChange={onChange}
          fixedDecimalScale={true}
          maxLength={12}
          {...rest}
        />
      </div>
    </Container>
  );
};

InputPrice.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputPrice;
