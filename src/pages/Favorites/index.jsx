import { Container, Content, Grid } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardFavorites from "../../components/CardFavorites";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.persisted.auth.favorites);
  console.log(favorites, "favorites");
  return (
    <Container>
      <Header />
      <Content>
        <h1>Meus favoritos</h1>
        <Grid>
          <CardFavorites />
          <CardFavorites />
          <CardFavorites />
          <CardFavorites />
          <CardFavorites />
          <CardFavorites />
          <CardFavorites />
          <CardFavorites />
        </Grid>
      </Content>
      <Footer />
    </Container>
  );
};

export default Favorites;
