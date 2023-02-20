import { Link } from "react-router-dom";
import { Container } from "./styles";

const CardFavorites = () => {
  return (
    <Container>
      <img src="/exemplo.png" alt="food-image" />
      <div>
        <span>Salada Radish</span>
        <Link>Remover dos favoritos</Link>
      </div>
    </Container>
  );
};

export default CardFavorites;
