import { Background, Container, Text } from "./styles";
import Header from "../../components/Header";
import cookiesimg from "/cookies.svg";
import Footer from "../../components/Footer";
const Home = () => {
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
      </Container>
      <Footer />
    </>
  );
};

export default Home;
