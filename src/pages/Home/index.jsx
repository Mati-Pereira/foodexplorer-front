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
  getFromDatabases,
  removeFromFavorites,
} from "../../context/features/favorites.slice";
import { toast } from "react-toastify";

const Home = () => {
  const { isAdmin, token } = useSelector((state) => state.persisted.auth);
  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const favorites = useSelector((state) => state.persisted.favorite.favorites);
  const order = useSelector((state) => state.persisted.order.orders);
  console.log("order", order);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (!favorites.length) {
          dispatch(getFromDatabases(JSON.parse(response.data.favoriteList)));
        }
      });
  }, [favorites]);

  useEffect(() => {
    api
      .get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRefeicoes(
          res.data
            .filter((item) => item.category === "refeicao")
            .map((item) => {
              return {
                ...item,
                quantity: 1,
              };
            })
        );
        setSobremesas(
          res.data
            .filter((item) => item.category === "sobremesa")
            .map((item) => {
              return {
                ...item,
                quantity: 1,
              };
            })
        );
        setBebidas(
          res.data
            .filter((item) => item.category === "bebida")
            .map((item) => {
              return {
                ...item,
                quantity: 1,
              };
            })
        );
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    return () => {
      setRefeicoes([]);
      setSobremesas([]);
      setBebidas([]);
    };
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
                quantity={item.quantity}
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
