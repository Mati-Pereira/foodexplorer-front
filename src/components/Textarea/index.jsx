import { Container } from "./styles";

const Textarea = ({ ...rest }) => {
  return (
    <Container>
      <label htmlFor="description">Descrição</label>
      <textarea
        name="description"
        id="description"
        rows={10}
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        {...rest}
      />
    </Container>
  );
};

export default Textarea;
