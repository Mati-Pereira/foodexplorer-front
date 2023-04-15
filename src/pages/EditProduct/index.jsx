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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProduct = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("refeicao");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [inputIngredient, setInputIngredient] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const navigate = useNavigate();

  const {
    colors: { red_300, green_700 },
  } = useTheme();

  const handleClickNewIngredient = () => {
    setIngredients([...ingredients, inputIngredient]);
    setInputIngredient("");
  };

  const handleDeleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
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
    setIsEditLoading(true);
    try {
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
          },
        })
        .then(() => {
          toast.success("Produto atualizado com sucesso!");
          setIsEditLoading(false);
          navigate(-1);
        })
        .catch((error) => {
          if (error.response) {
            toast.error(error.response.data.message);
          } else {
            toast.error(error.message);
          }
          setIsEditLoading(false);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsEditLoading(false);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      setIsDeleteLoading(true);
      await api
        .delete(`products/${id}`)
        .then(() => {
          toast.success("Produto excluído com sucesso!");
          navigate("/");
        })
        .finally(() => {
          setIsDeleteLoading(false);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  useEffect(() => {
    api.get(`products/${id}`).then((response) => {
      setName(response.data.name);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setIngredients(
        response.data.ingredients.map((ingredient) => ingredient.name)
      );
      setPrice(Number(response.data.price));
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
              <InputFile onChange={handleImageProduct} required />
              <Input
                label="Nome"
                placeholder="Ex.: Salada Ceasar"
                id="nome"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <InputSelect onChange={handleSelectedCategory} value={category} />
            </FirstRow>
            <SecondRow>
              <TagsContainer>
                <label>
                  Ingredientes
                  <Tags>
                    {ingredients.map((ingredient, index) => (
                      <EditTag
                        text={ingredient}
                        key={index}
                        value={ingredient}
                        onClick={() => handleDeleteIngredient(index)}
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
                {isDeleteLoading ? <Loading /> : "Deletar Prato"}
              </Button>
              <Button color={red_300} type="button" onClick={handleEditProduct}>
                {isEditLoading ? <Loading /> : "Salvar alterações"}
              </Button>
            </Buttons>
          </Rows>
        </Form>
      </Content>
    </>
  );
};

export default EditProduct;
