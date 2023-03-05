import { AddProduct, Content, Tags, Text } from "./styles";
import DetailsAnchor from "../../components/DetailsAnchor";
import Tag from "../../components/Tag";
import Quantity from "../../components/Quantity";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const {
    colors: { red_500 },
  } = useTheme();
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  useEffect(() => {
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
      });
  }, [id]);
  return (
    <>
      <DetailsAnchor to="/" />
      <Content>
        {data && (
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
                  <Quantity quantity={5} />
                  <Button color={red_500}>Incluir</Button>
                </AddProduct>
              )}
            </Text>
          </>
        )}
      </Content>
    </>
  );
};

Details.propTypes = {
  isAdmin: PropTypes.bool,
};

export default Details;
