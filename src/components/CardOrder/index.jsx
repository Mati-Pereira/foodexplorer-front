import { api } from "../../services/api";
import { Container, Name, Text } from "./styles";
import PropTypes from "prop-types";

const CardOrder = ({ image, quantity, name, price }) => {
  return (
    <Container>
      <img src={`${api.defaults.baseURL}/${image}`} alt="food-image" />
      <Text>
        <Name>
          {quantity} x {name} <span>{price}</span>
        </Name>
        <button>Excluir</button>
      </Text>
    </Container>
  );
};

CardOrder.propTypes = {
  image: PropTypes.string,
  quantity: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default CardOrder;
