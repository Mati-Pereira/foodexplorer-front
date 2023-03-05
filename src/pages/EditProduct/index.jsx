import {
  Buttons,
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
import FileInput from "../../components/FileInput";
import SelectInput from "../../components/SelectInput";
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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const AddProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("refeicao");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [inputIngredient, setInputIngredient] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    colors: { red_300, green_700 },
  } = useTheme();

  const handleClickNewIngredient = () => {
    setIngredients([...ingredients, inputIngredient]);
    setInputIngredient("");
  };

  const handleDeleteIngredient = () => {
    setIngredients(
      ingredients.filter((ingredient) => ingredient !== inputIngredient)
    );
    setInputIngredient("");
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

  const handleEditProduct = async (e) => {
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
      })
    );

    await api
      .put(`/products/${id}`, fileUpload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(() => {
        toast.success("Produto atualizado com sucesso!");
        setIsLoading(false);
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error(error.message);
        }
        setIsLoading(false);
      });
  };

  const handleDeleteProduct = async () => {
    await api.delete(`products/${id}`).then(() => {
      toast.success("Produto excluído com sucesso!");
      navigate("/");
    });
  };

  useEffect(() => {
    api.get(`products/${id}`).then((response) => {
      setName(response.data.name);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setIngredients(
        response.data.ingredients.map((ingredient) => ingredient.name)
      );
      setPrice(response.data.price);
      setImage(response.data.image);
    });
  }, []);

  useEffect(() => {
    if (image) {
      toast.success("Imagem selecionada com sucesso!");
    }
  }, [typeof image === "object"]);

  return (
    <>
      <DetailsAnchor to="/" />
      <Content>
        <h1>Editar Prato</h1>
        <Form>
          <Rows>
            <FirstRow>
              <FileInput onChange={handleImageProduct} required />
              <Input
                label="Nome"
                placeholder="Ex.: Salada Ceasar"
                id="nome"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <SelectInput onChange={handleSelectedCategory} value={category} />
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
            <Buttons>
              <Button
                color={green_700}
                type="button"
                onClick={handleDeleteProduct}
              >
                Deletar Prato
              </Button>
              <Button color={red_300} type="button" onClick={handleEditProduct}>
                {isLoading ? <Loading /> : "Salvar alterações"}
              </Button>
            </Buttons>
          </Rows>
        </Form>
      </Content>
    </>
  );
};

export default AddProduct;
