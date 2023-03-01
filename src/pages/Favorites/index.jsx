import { Container, Content, Grid } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardFavorites from "../../components/CardFavorites";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../context/features/favorites.slice";

const Favorites = () => {
  const favorites = useSelector((state) => state.persisted.favorite.favorites);
  const dispatch = useDispatch();
  return (
    <Container>
      <Header />
      <Content>
        <h1>Meus favoritos</h1>
        {favorites.length ? (
          favorites.map((favorite) => (
            <Grid key={favorite.id}>
              <CardFavorites
                image={favorite.image}
                name={favorite.name}
                onClick={() => dispatch(removeFromFavorites(favorite))}
              />
            </Grid>
          ))
        ) : (
          <h5
            style={{
              color: "#cccccc",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Poppins",
              fontSize: "2rem",
              height: "300px",
            }}
          >
            Nenhum favorito encontrado
          </h5>
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default Favorites;
