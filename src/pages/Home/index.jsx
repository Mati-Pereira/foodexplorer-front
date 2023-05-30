import { Background, Container, Text } from "./styles";
import cookiesimg from "/cookies.svg";
import Card from "../../components/Card";
import Section from "../../components/Section";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductNotFound from "../../components/ProductNotFound";
import { toast } from "react-toastify";
import { addToOrder } from "../../context/features/orders.slice";
import CardSkeleton from "../../components/CardSkeleton";
import { useDebounce } from "use-debounce";

const Home = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  const [isLoading, setIsLoading] = useState(true);

  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  const searchValue = useSelector((state) => state.search.value);
  const orders = useSelector((state) => state.persisted.order.orders);

  const [value] = useDebounce(searchValue, 750);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        await api
          .get(`/products?name=${value}`)
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
            if (err.response) {
              toast.error(err.response.data.message);
            } else {
              toast.error(err.message);
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [value]);

  return (
    <Container>
      <Background>
        <img alt="cookies" src={cookiesimg} />
        <Text>
          <h1>Sabores inigualáveis</h1>
          <h5>Sinta o cuidado do preparo com ingredientes selecionados</h5>
        </Text>
      </Background>
      <Section title="Refeições">
        {isLoading ? (
          <CardSkeleton />
        ) : refeicoes.length && refeicoes ? (
          refeicoes.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              ingredients={item.ingredients}
              price={Number(item.price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              text={item.description}
              image={item.image}
              isAdmin={isAdmin}
              quantity={item.quantity}
              id={item.id}
              handleAddQuantity={(id) =>
                setRefeicoes((prevValue) =>
                  prevValue.map((item) =>
                    item.id === id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  )
                )
              }
              handleRemoveQuantity={
                item.quantity > 1
                  ? (id) =>
                      setRefeicoes((prevValue) =>
                        prevValue.map((item) =>
                          item.id === id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                        )
                      )
                  : null
              }
              handleAddOrder={() => {
                if (orders.find((order) => order.id === item.id)) {
                  toast.error("Item já adicionado ao pedido");
                } else {
                  dispatch(addToOrder({ ...item, quantity: item.quantity }));
                  toast.success("Item adicionado ao pedido");
                }
              }}
            />
          ))
        ) : (
          <ProductNotFound />
        )}
      </Section>
      <Section title="Sobremesas">
        {isLoading ? (
          <CardSkeleton />
        ) : sobremesas.length && sobremesas ? (
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
              handleAddQuantity={(id) =>
                setSobremesas((prevValue) =>
                  prevValue.map((item) =>
                    item.id === id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  )
                )
              }
              handleRemoveQuantity={
                item.quantity > 1
                  ? (id) =>
                      setSobremesas((prevValue) =>
                        prevValue.map((item) =>
                          item.id === id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                        )
                      )
                  : null
              }
              handleAddOrder={() => {
                if (orders.find((order) => order.id === item.id)) {
                  toast.error("Item já adicionado ao pedido");
                } else {
                  dispatch(addToOrder({ ...item, quantity: item.quantity }));
                  toast.success("Item adicionado ao pedido");
                }
              }}
            />
          ))
        ) : (
          <ProductNotFound />
        )}
      </Section>
      <Section title="Bebidas">
        {isLoading ? (
          <CardSkeleton />
        ) : bebidas.length && bebidas ? (
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
              handleAddQuantity={(id) =>
                setBebidas((prevValue) =>
                  prevValue.map((item) =>
                    item.id === id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  )
                )
              }
              handleRemoveQuantity={
                item.quantity > 1
                  ? (id) =>
                      setBebidas((prevValue) =>
                        prevValue.map((item) =>
                          item.id === id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                        )
                      )
                  : null
              }
              handleAddOrder={() => {
                if (orders.find((order) => order.id === item.id)) {
                  toast.error("Item já adicionado ao pedido");
                } else {
                  dispatch(addToOrder({ ...item, quantity: item.quantity }));
                  toast.success("Item adicionado ao pedido");
                }
              }}
            />
          ))
        ) : (
          <ProductNotFound />
        )}
      </Section>
    </Container>
  );
};

export default Home;
