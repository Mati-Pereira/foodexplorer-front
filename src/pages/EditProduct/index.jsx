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
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../services/api";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [inputIngredient, setInputIngredient] = useState("");

  const handleDeleteIngredients = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleAddIngredients = () => {
    const newIngredients = [...ingredients];
    newIngredients.push(inputIngredient);
    setIngredients(newIngredients);
  };

  const handleDescriptions = (e) => {
    setDescription(e.target.value);
  };

  const {
    colors: { salmon, green_500 },
  } = useTheme();

  useEffect(() => {
    api.get(`http://localhost:3000/products/${id}`).then((response) => {
      setName(response.data.name);
      setDescription(response.data.description);
      setIngredients(
        response.data.ingredients.map((ingredient) => ingredient.name)
      );
      setCategory(response.data.category);
      setPrice(response.data.price);
    });
  }, [id]);

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
              placeholder={"Ex.: Salada Ceasar"}
              id="nome"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <SelectInput
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </FirstRow>
          <SecondRow>
            <TagsContainer>
              <label>
                Ingredientes
                <Tags>
                  {ingredients.map((tag, index) => (
                    <EditTag
                      text={tag}
                      key={index}
                      onClick={handleDeleteIngredients}
                      value={ingredients}
                    />
                  ))}
                  <InputTag
                    onChange={(e) => setInputIngredient(e.target.value)}
                    onClick={handleAddIngredients}
                  />
                </Tags>
              </label>
            </TagsContainer>
            <InputPrice
              id="price"
              type="text"
              label="Preço"
              onChange={(value) => setPrice(value)}
              name="Preço"
              price={price}
            />
          </SecondRow>
          <ThirdRow>
            <Textarea onChange={handleDescriptions} value={description} />
          </ThirdRow>
          <Buttons>
            <Button color={green_500}>Excluir prato</Button>
            <Button color={salmon}>Salvar alterações</Button>
          </Buttons>
        </Rows>
      </Content>
      <Footer />
    </Container>
  );
};

export default EditProduct;
