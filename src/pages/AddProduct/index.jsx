import { Container, Content, FirstRow } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import DetailsAnchor from "../../components/DetailsAnchor";
import FileInput from "../../components/FileInput";
import SelectInput from "../../components/SelectInput";

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
      </Content>
      <Footer />
    </Container>
  );
};

export default AddProduct;
