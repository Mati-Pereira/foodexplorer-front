import { Container, H1 } from "./styles";
import Header from "../../components/Header";
import cookiesimg from "/cookies.svg";
const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <H1>Home</H1>
        <img alt="cookies" src={cookiesimg} />
      </Container>
    </>
  );
};

export default Home;
