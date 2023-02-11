import { Container, Label, Option, Select } from "./styles";
import PropTypes from "prop-types";

const Selectinput = ({ onChange, ...rest }) => {
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

Selectinput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Selectinput;
