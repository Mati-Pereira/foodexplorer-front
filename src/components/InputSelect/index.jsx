import { Container, Label, Option, Select } from "./styles";
import PropTypes from "prop-types";

const InputSelect = ({ onChange, ...rest }) => {
  return (
    <Container>
      <Label>Categoria</Label>
      <Select onChange={onChange} {...rest}>
        <Option value="refeicao">Refeição</Option>
        <Option value="sobremesa">Sobremesa</Option>
        <Option value="bebida">Bebida</Option>
      </Select>
    </Container>
  );
};

InputSelect.propTypes = {
  onChange: PropTypes.func,
};

export default InputSelect;
