import { Container, Label } from "./styles";
import PropTypes from "prop-types";
import CurrencyInput from "react-currency-input-field";

const InputPrice = ({ type, id, label, onChange, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <div>
        <CurrencyInput
          type={type}
          id={id}
          placeholder="R$ 0,00"
          onValueChange={onChange}
          maxLength={12}
          allowNegativeValue={false}
          prefix="R$ "
          groupSeparator="."
          decimalSeparator=","
          alt="Preço"
          fixedDecimalLength={2}
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
