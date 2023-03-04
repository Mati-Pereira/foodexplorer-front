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
import { addToOrder } from "../../context/features/orders.slice";

const Home = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);

  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  const favorites = useSelector((state) => state.persisted.favorite.favorites);
  const searchValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/favorites", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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
      .get(`/products?name=${searchValue}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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
  }, [searchValue]);

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
                price={Number(item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
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
                handleAddQuantity={() =>
                  setRefeicoes((prevValue) =>
                    prevValue.map((item) =>
                      item.id === item.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    )
                  )
                }
                handleRemoveQuantity={
                  item.quantity > 1
                    ? () =>
                        setRefeicoes((prevValue) =>
                          prevValue.map((item) =>
                            item.id === item.id
                              ? { ...item, quantity: item.quantity - 1 }
                              : item
                          )
                        )
                    : null
                }
                handleAddOrder={() =>
                  dispatch(addToOrder({ ...item, quantity: item.quantity }))
                }
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
                price={Number(item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
                name={item.name}
                text={item.description}
                image={item.image}
                isAdmin={isAdmin}
                id={item.id}
                quantity={item.quantity}
                handleAddFavorites={() => dispatch(addToFavorites(item))}
                handleRemoveFavorites={() =>
                  dispatch(removeFromFavorites(item))
                }
                isFavorite={favorites.some(
                  (favorite) => favorite.id === item.id
                )}
                handleAddQuantity={() =>
                  setSobremesas((prevValue) =>
                    prevValue.map((item) =>
                      item.id === item.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    )
                  )
                }
                handleRemoveQuantity={() =>
                  item.quantity > 1
                    ? () =>
                        setSobremesas((prevValue) =>
                          prevValue.map((item) =>
                            item.id === item.id
                              ? { ...item, quantity: item.quantity - 1 }
                              : item
                          )
                        )
                    : null
                }
                handleAddOrder={() =>
                  dispatch(addToOrder({ ...item, quantity: item.quantity }))
                }
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
                price={Number(item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
                name={item.name}
                text={item.description}
                image={item.image}
                isAdmin={isAdmin}
                id={item.id}
                quantity={item.quantity}
                handleAddFavorites={() => dispatch(addToFavorites(item))}
                handleRemoveFavorites={() =>
                  dispatch(removeFromFavorites(item))
                }
                isFavorite={favorites.some(
                  (favorite) => favorite.id === item.id
                )}
                handleAddQuantity={() =>
                  setBebidas((prevValue) =>
                    prevValue.map((item) =>
                      item.id === item.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    )
                  )
                }
                handleRemoveQuantity={() =>
                  item.quantity > 1
                    ? () =>
                        setBebidas((prevValue) =>
                          prevValue.map((item) =>
                            item.id === item.id
                              ? { ...item, quantity: item.quantity - 1 }
                              : item
                          )
                        )
                    : null
                }
                handleAddOrder={() =>
                  dispatch(addToOrder({ ...item, quantity: item.quantity }))
                }
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
