import { Container, Content, Label } from "./styles";
import { AiOutlineUpload } from "react-icons/ai";
import PropTypes from "prop-types";

const FileInput = ({ onChange, ...rest }) => {
  return (
    <Container>
      <Label>Imagem do Prato</Label>
      <Content>
        <AiOutlineUpload />
        <label htmlFor="file">Selecione Imagem</label>
        <input
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          onChange={onChange}
          {...rest}
        />
      </Content>
    </Container>
  );
};

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileInput;
