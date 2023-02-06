import {
  Buttons,
  Container,
  Content,
  FirstRow,
  Rows,
  SecondRow,
  Tags,
  TagsContainer,
  ThirdRow,
} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import DetailsAnchor from "../../components/DetailsAnchor";
import FileInput from "../../components/FileInput";
import SelectInput from "../../components/SelectInput";
import EditTag from "../../components/EditTag";
import InputPrice from "../../components/InputPrice";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import { useTheme } from "styled-components";

const EditProduct = () => {
  const {
    colors: { salmon, green_500 },
  } = useTheme();
  return (
    <Container>
      <Header />
      <DetailsAnchor to="/" />
      <Content>
        <h1>Editar Prato</h1>
        <Rows>
          <FirstRow>
            <FileInput />
            <Input
              label="Nome"
              placeholder="Ex.: Salada Ceasar"
              id="nome"
              type="text"
            />
            <SelectInput />
          </FirstRow>
          <SecondRow>
            <TagsContainer>
              <label>
                Ingredientes
                <Tags>
                  <EditTag text="Pão" />
                  <EditTag text="Arroz" />
                  <EditTag text="Açucar" edit change />
                  <EditTag text="Feijão" edit change />
                </Tags>
              </label>
            </TagsContainer>
            <InputPrice id="price" type="text" label="Preço" />
          </SecondRow>
          <ThirdRow>
            <Textarea />
          </ThirdRow>
          <Buttons>
            <Button color={green_500} text="Excluir Prato" />
            <Button color={salmon} text="Salvar alterações" />
          </Buttons>
        </Rows>
      </Content>
      <Footer />
    </Container>
  );
};

export default EditProduct;
