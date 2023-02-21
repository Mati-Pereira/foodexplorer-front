import { Container, Content, Grid } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardFavorites from "../../components/CardFavorites";

const Favorites = () => {
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
