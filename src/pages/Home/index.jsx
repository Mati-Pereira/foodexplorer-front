import { Background, Container, Text } from "./styles";
import Header from "../../components/Header";
import cookiesimg from "/cookies.svg";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
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
      <Card
        title="arroz"
        image="/Imagens/Mask group-1.png"
        price="10,0"
        quantity={10}
        text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
        isAdmin
      />
      <Footer />
    </>
  );
};

export default Home;
