import {
  Content,
  FirstRow,
  Form,
  Rows,
  SecondRow,
  Tags,
  TagsContainer,
  ThirdRow,
} from "./styles";
import Input from "../../components/Input";
import DetailsAnchor from "../../components/DetailsAnchor";
import InputFile from "../../components/InputFile";
import InputSelect from "../../components/InputSelect";
import EditTag from "../../components/EditTag";
import InputPrice from "../../components/InputPrice";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { useTheme } from "styled-components";
import { useState } from "react";
import InputTag from "../../components/InputTag";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("refeicao");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [inputIngredient, setInputIngredient] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleClickNewIngredient = () => {
    setIngredients([...ingredients, inputIngredient]);
    setInputIngredient("");
  };

  const handleDeleteIngredient = (index) => {
    const newTags = [...ingredients];
    newTags.splice(index, 1);
    setIngredients(newTags);
  };

  const handlePriceChange = (values) => {
    setPrice(values.floatValue);
  };

  const handleSelectedCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionProduct = (e) => {
    setDescription(e.target.value);
  };

  const handleImageProduct = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (inputIngredient.length) {
      return toast.error("Existem ingredientes no input do formulário.");
    }

    if (
      !name ||
      !category ||
      !description ||
      !ingredients.length ||
      !price ||
      !image
    ) {
      return toast.error("Preencha todos os campos.");
    }

    const fileUpload = new FormData();

    fileUpload.append("image", image);
    fileUpload.append(
      "data",
      JSON.stringify({
        name,
        category,
        description,
        ingredients,
        price,
        image: fileUpload.get("image"),
      })
    );
    await api
      .post("/products", fileUpload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toast.success("Produto criado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const {
    colors: { red_300 },
  } = useTheme();

  useEffect(() => {
    if (image) {
      toast.success("Imagem selecionada com sucesso!");
    }
  }, [image]);

  return (
    <>
      <DetailsAnchor to="/" />
      <Content>
        <h1>Adicionar Prato</h1>
        <Form>
          <Rows>
            <FirstRow>
              <InputFile onChange={handleImageProduct} name="file" required />
              <Input
                label="Nome"
                placeholder="Ex.: Salada Ceasar"
                id="nome"
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <InputSelect onChange={handleSelectedCategory} value={category} />
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
                        onClick={handleDeleteIngredient}
                      />
                    ))}
                    <InputTag
                      onChange={(e) => setInputIngredient(e.target.value)}
                      onClick={handleClickNewIngredient}
                      value={inputIngredient}
                    />
                  </Tags>
                </label>
              </TagsContainer>
              <InputPrice
                id="price"
                type="text"
                label="Preço"
                onChange={handlePriceChange}
                value={price}
                required
              />
            </SecondRow>
            <ThirdRow>
              <Textarea
                onChange={handleDescriptionProduct}
                value={description}
                required
              />
            </ThirdRow>
            <Button color={red_300} type="button" onClick={handleCreateProduct}>
              {isLoading ? <Loading /> : "Salvar alterações"}
            </Button>
          </Rows>
        </Form>
      </Content>
    </>
  );
};

export default AddProduct;
