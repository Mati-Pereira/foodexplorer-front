import { Container, Label, Option, Select } from "./styles";

const Selectinput = () => {
  return (
    <Container>
      <Label>Categoria</Label>
      <Select>
        <Option value="refeicao">Refeição</Option>
        <Option value="sobremesa">Sobremesa</Option>
        <Option value="bebida">Bebida</Option>
      </Select>
    </Container>
  );
};

export default Selectinput;
