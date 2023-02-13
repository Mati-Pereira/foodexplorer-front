import { AddProduct, Container, Image, Price, Text, Title } from "./styles";
import PropTypes from "prop-types";
import Button from "../Button";
import Quantity from "../Quantity";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useTheme } from "styled-components";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

const Card = ({ image, name, text, price, quantity, isAdmin, id }) => {
  const {
    colors: { red },
  } = useTheme();
  return (
    <Container>
      <Image src={`${api.defaults.baseURL}/${image}`} alt="food picture" />
      <Title>{name}</Title>
      <Text>{text}</Text>
      <Price>{price}</Price>
      {!isAdmin && (
        <AddProduct>
          <Quantity quantity={quantity} />
          <Button color={red}>Incluir</Button>
        </AddProduct>
      )}
      {isAdmin ? (
        <Link to={`edit/${id}`}>
          <BsPencil />
        </Link>
      ) : (
        <AiOutlineHeart />
      )}
    </Container>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  isAdmin: PropTypes.bool,
  id: PropTypes.number,
};
