import { Container, Image, Price, Text, Title } from "./styles";
import PropTypes from "prop-types";

const Card = ({ image, title, text, price, quantity }) => {
  return (
    <Container>
      <Image src={image} alt="food picture" />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Price>R$ {price}</Price>
      <p>Quantidade: {quantity}</p>
    </Container>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
