import { Background, Container, Text } from "./styles";
import Header from "../../components/Header";
import cookiesimg from "/cookies.svg";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Section from "../../components/Section";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductNotFound from "../../components/ProductNotFound";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../context/features/favorites.slice";

const Home = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const favorites = useSelector((state) => state.persisted.favorite.favorites);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   api.get("/favorites").then((response) => {});
  // }, []);

  useEffect(() => {
    api.get("/products").then((res) => {
      setRefeicoes(res.data.filter((item) => item.category === "refeicao"));
      setSobremesas(res.data.filter((item) => item.category === "sobremesa"));
      setBebidas(res.data.filter((item) => item.category === "bebida"));
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Background>
          <img alt="cookies" src={cookiesimg} />
          <Text>
            <h1>Sabores inigualáveis</h1>
            <h5>Sinta o cuidado do preparo com ingredientes selecionados</h5>
          </Text>
        </Background>
        <Section title="Refeições">
          {refeicoes.length ? (
            refeicoes.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                text={item.description}
                image={item.image}
                isAdmin={isAdmin}
                id={item.id}
                handleAddFavorites={() => dispatch(addToFavorites(item))}
                handleRemoveFavorites={() =>
                  dispatch(removeFromFavorites(item))
                }
                isFavorite={favorites.some(
                  (favorite) => favorite.id === item.id
                )}
              />
            ))
          ) : (
            <ProductNotFound />
          )}
        </Section>
        <Section title="Sobremesas">
          {sobremesas.length ? (
            sobremesas.map((item) => (
              <Card
                key={item.id}
                price={item.price}
                name={item.name}
                text={item.description}
                image={item.image}
                isAdmin={isAdmin}
                id={item.id}
                handleAddFavorites={() => dispatch(addToFavorites(item))}
                handleRemoveFavorites={() =>
                  dispatch(removeFromFavorites(item))
                }
                isFavorite={favorites.some(
                  (favorite) => favorite.id === item.id
                )}
              />
            ))
          ) : (
            <ProductNotFound />
          )}
        </Section>
        <Section title="Bebidas">
          {bebidas.length ? (
            bebidas.map((item) => (
              <Card
                key={item.id}
                price={item.price}
                name={item.name}
                text={item.description}
                image={item.image}
                isAdmin={isAdmin}
                id={item.id}
                handleAddFavorites={() => dispatch(addToFavorites(item))}
                handleRemoveFavorites={() =>
                  dispatch(removeFromFavorites(item))
                }
                isFavorite={favorites.some(
                  (favorite) => favorite.id === item.id
                )}
              />
            ))
          ) : (
            <ProductNotFound />
          )}
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
