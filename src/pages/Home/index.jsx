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

const Home = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  const [allProducts, setAllProducts] = useState([]);
  const [refeicoes, setRefeicoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    async function getAll() {
      await api("/products").then((res) => setAllProducts(res.data));
    }
    getAll();
  }, []);

  useEffect(() => {
    const refeicao = allProducts.filter((item) => item.category == "refeicao");
    const sobremesa = allProducts.filter(
      (item) => item.category == "sobremesa"
    );
    const bebida = allProducts.filter((item) => item.category == "bebida");
    setRefeicoes(refeicao);
    setSobremesas(sobremesa);
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
          {refeicoes.map((item) => (
            <Card
              key={item.id}
              price={item.price}
              text={item.description}
              image={item.image}
              isAdmin={isAdmin}
            />
          ))}
        </Section>
        <Section title="Sobremesas">
          {sobremesas.map((item) => (
            <Card
              key={item.id}
              price={item.price}
              text={item.description}
              image={item.image}
              isAdmin={isAdmin}
            />
          ))}
        </Section>
        <Section title="Bebidas">
          {bebidas.map((item) => (
            <Card
              key={item.id}
              price={item.price}
              text={item.description}
              image={item.image}
              isAdmin={isAdmin}
            />
          ))}
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
