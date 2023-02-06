import {
  Container,
  Content,
  FirstRow,
  SecondRow,
  Tags,
  TagsContainer,
} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import DetailsAnchor from "../../components/DetailsAnchor";
import FileInput from "../../components/FileInput";
import SelectInput from "../../components/SelectInput";
import EditTag from "../../components/EditTag";
import InputPrice from "../../components/InputPrice";

const AddProduct = () => {
  return (
    <Container>
      <Header />
      <DetailsAnchor to="#" />
      <Content>
        <h1>Adicionar Prato</h1>
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
      </Content>
      <Footer />
    </Container>
  );
};

export default AddProduct;
