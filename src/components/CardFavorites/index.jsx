import { Button, Container } from "./styles";
import PropTypes from "prop-types";
const CardFavorites = ({ image, name, onClick }) => {
  return (
    <Container>
      <img src={image} alt="food-image" />
      <div>
        <span>{name}</span>
        <Button onClick={onClick}>Remover dos favoritos</Button>
      </div>
    </Container>
  );
};

CardFavorites.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardFavorites;
