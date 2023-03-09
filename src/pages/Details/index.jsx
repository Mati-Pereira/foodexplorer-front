import { AddProduct, Content, Tags, Text } from "./styles";
import DetailsAnchor from "../../components/DetailsAnchor";
import Tag from "../../components/Tag";
import Quantity from "../../components/Quantity";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { addToOrder } from "../../context/features/orders.slice";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    colors: { red_500 },
  } = useTheme();
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  const handleAddProduct = () => {
    dispatch(addToOrder({ ...data, quantity }));
    toast.success("Produto adicionado ao carrinho!");
  };
  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/products/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Ocorreu um erro inesperado!");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <>
      <DetailsAnchor to="/" />
      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          data && (
            <>
              <img src={`${api.defaults?.baseURL}/${data.image}`} />
              <Text>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <Tags>
                  {data.ingredients?.map((ingredient) => (
                    <Tag key={ingredient.id} text={ingredient.name} />
                  ))}
                </Tags>
                {isAdmin ? (
                  <AddProduct>
                    <Link to={`/edit/${id}`}>
                      <Button color={red_500}>Editar</Button>
                    </Link>
                  </AddProduct>
                ) : (
                  <AddProduct>
                    <Quantity
                      quantity={quantity}
                      handleAddQuantity={handleAddQuantity}
                      handleRemoveQuantity={handleRemoveQuantity}
                    />
                    <Button onClick={handleAddProduct} color={red_500}>
                      Incluir{" "}
                      {Number(data.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Button>
                  </AddProduct>
                )}
              </Text>
            </>
          )
        )}
      </Content>
    </>
  );
};

Details.propTypes = {
  isAdmin: PropTypes.bool,
};

export default Details;
