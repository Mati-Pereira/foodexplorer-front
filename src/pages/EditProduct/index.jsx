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
import { useState } from "react";
import InputTag from "../../components/InputTag";

const EditProduct = () => {
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");

  const handleClickNewTag = () => {
    setTags([...tags, inputTag]);
    setInputTag("");
  };

  const handleDeleteTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

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
                  {tags.map((tag, index) => (
                    <EditTag text={tag} key={index} onClick={handleDeleteTag} />
                  ))}
                  <InputTag
                    onChange={(e) => setInputTag(e.target.value)}
                    onClick={handleClickNewTag}
                    value={inputTag}
                  />
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
