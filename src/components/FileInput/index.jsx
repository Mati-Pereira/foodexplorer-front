import { Container, Content, Label } from "./styles";
import { AiOutlineUpload } from "react-icons/ai";
import PropTypes from "prop-types";

const FileInput = ({ onChange, ...rest }) => {
  return (
    <Container>
      <Label>Imagem do Prato</Label>
      <Content>
        <label htmlFor="file">
          <AiOutlineUpload />
          Selecione Imagem
          <input
            type="file"
            id="file"
            accept="image/png image/jpeg"
            onChange={onChange}
            {...rest}
          />
        </label>
      </Content>
    </Container>
  );
};

FileInput.propTypes = {
  onChange: PropTypes.func,
};

export default FileInput;
