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
} from "../../context/features/auth.thunk";

const Home = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  const [allProducts, setAllProducts] = useState([]);
  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const favorites = useSelector((state) => state.persisted.auth.favorites);
  console.log("favorite", favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get("/products").then((res) => {
      setAllProducts(res.data);
    });
  }, []);
  useEffect(() => {
    const refeicao = allProducts.filter((item) => item.category == "refeicao");
    setRefeicoes(refeicao);
    const sobremesa = allProducts.filter(
      (item) => item.category == "sobremesa"
    );
    setSobremesas(sobremesa);
    const bebida = allProducts.filter((item) => item.category == "bebida");
    setBebidas(bebida);
  }, [allProducts]);

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
