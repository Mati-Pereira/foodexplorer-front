import { Container, Content, FirstRow, SecondRow } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import DetailsAnchor from "../../components/DetailsAnchor";
import FileInput from "../../components/FileInput";
import SelectInput from "../../components/SelectInput";
import EditTag from "../../components/EditTag";

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
          <EditTag text="Pão" edit={false} />
          <EditTag text="Arroz" edit={false} />
          <EditTag text="Açucar" edit change />
          <EditTag text="Feijão" edit change />
        </SecondRow>
      </Content>
      <Footer />
    </Container>
  );
};

export default AddProduct;
