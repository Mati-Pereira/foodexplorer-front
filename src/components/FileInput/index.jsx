import { Container, Content, Label } from "./styles";
import { AiOutlineUpload } from "react-icons/ai";

const FileInput = () => {
  return (
    <Container>
      <Label>Imagem do Prato</Label>
      <Content>
        <AiOutlineUpload />
        <label htmlFor="file">Selecione Imagem</label>
        <input type="file" id="file" />
      </Content>
    </Container>
  );
};

export default FileInput;
