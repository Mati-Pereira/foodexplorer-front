import { AddProduct, Container, Image, Price, Text, Title } from "./styles";
import PropTypes from "prop-types";
import Button from "../Button";
import Quantity from "../Quantity";
import { BsPencil } from "react-icons/bs";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import Anchor from "../Anchor";
import { api } from "../../services/api";

const Card = ({
  image,
  name,
  text,
  price,
  quantity,
  handleAddQuantity,
  handleRemoveQuantity,
  isAdmin,
  id,
  handleAddOrder,
}) => {
  const {
    colors: { red_500 },
  } = useTheme();
  return (
    <Container>
      <Link to={`/details/${id}`}>
        <Image src={`${api.defaults.baseURL}/${image}`} alt="food picture" />
        <Title>{name}</Title>
        <Text>{text}</Text>
        <Price>{price}</Price>
      </Link>
      {!isAdmin && (
        <div>
          <AddProduct>
            <Quantity
              quantity={quantity}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
            />
            <Button color={red_500} onClick={handleAddOrder}>
              Incluir
            </Button>
          </AddProduct>
        </div>
      )}
      {isAdmin && (
        <div>
          <Anchor to={`edit/${id}`}>
            <BsPencil className="edit" />
          </Anchor>
        </div>
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
  handleAddOrder: PropTypes.func,
  handleAddQuantity: PropTypes.func,
  handleRemoveQuantity: PropTypes.func,
};
