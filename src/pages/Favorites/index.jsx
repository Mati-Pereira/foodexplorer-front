import { Container, Content, Grid } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardFavorites from "../../components/CardFavorites";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../context/features/favorites.slice";

const Favorites = () => {
  const favorites = useSelector((state) => state.persisted.favorite.favorites);
  const dispatch = useDispatch();
  console.log(favorites);
  return (
    <Container>
      <Header />
      <Content>
        <h1>Meus favoritos</h1>
        <Grid>
          {favorites.map((favorite) => (
            <CardFavorites
              key={favorite.id}
              image={favorite.image}
              name={favorite.name}
              onClick={() => dispatch(removeFromFavorites(favorite))}
            />
          ))}
        </Grid>
      </Content>
      <Footer />
    </Container>
  );
};

export default Favorites;
