import { AddProduct, Container, Image, Price, Text, Title } from "./styles";
import PropTypes from "prop-types";
import Button from "../Button";
import Quantity from "../Quantity";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useTheme } from "styled-components";

const Card = ({ image, title, text, price, quantity, isAdmin }) => {
  const {
    colors: { red },
  } = useTheme();
  return (
    <Container>
      <Image src={image} alt="food picture" />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Price>R$ {price}</Price>
      {!isAdmin && (
        <AddProduct>
          <Quantity quantity={quantity} />
          <Button color={red}>Incluir</Button>
        </AddProduct>
      )}
      {isAdmin ? <BsPencil /> : <AiOutlineHeart />}
    </Container>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
};
