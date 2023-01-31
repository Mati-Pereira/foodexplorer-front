import { Background, Container, Text } from "./styles";
import Header from "../../components/Header";
import cookiesimg from "/cookies.svg";
const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Background>
          <img alt="cookies" src={cookiesimg} />
          <Text>
            <h1>Quero Café</h1>
          </Text>
        </Background>
      </Container>
    </>
  );
};

export default Home;
