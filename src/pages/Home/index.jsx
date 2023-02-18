import { Background, Container, Text } from "./styles";
import Header from "../../components/Header";
import cookiesimg from "/cookies.svg";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Section from "../../components/Section";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductNotFound from "../../components/ProductNotFound";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);

  const [allProducts, setAllProducts] = useState([]);
  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);

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
              <Link key={item.id} to={`/details/${item.id}`}>
                <Card
                  name={item.name}
                  price={item.price}
                  text={item.description}
                  image={item.image}
                  isAdmin={isAdmin}
                  id={item.id}
                />
              </Link>
            ))
          ) : (
            <ProductNotFound />
          )}
        </Section>
        <Section title="Sobremesas">
          {sobremesas.length ? (
            sobremesas.map((item) => (
              <Link key={item.id} to={`/details/${item.id}`}>
                <Card
                  price={item.price}
                  name={item.name}
                  text={item.description}
                  image={item.image}
                  isAdmin={isAdmin}
                  id={item.id}
                />
              </Link>
            ))
          ) : (
            <ProductNotFound />
          )}
        </Section>
        <Section title="Bebidas">
          {bebidas.length ? (
            bebidas.map((item) => (
              <Link key={item.id} to={`/details/${item.id}`}>
                <Card
                  price={item.price}
                  name={item.name}
                  text={item.description}
                  image={item.image}
                  isAdmin={isAdmin}
                  id={item.id}
                />
              </Link>
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
