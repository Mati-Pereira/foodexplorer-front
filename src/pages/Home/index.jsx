import { Container } from "./styles";
import cookiesimg from "/cookies.svg";
const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <img alt="cookies" src={cookiesimg} />
    </Container>
  );
};

export default Home;
