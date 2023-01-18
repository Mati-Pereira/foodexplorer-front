import { Container, Content } from "./styles";
import logo from "/logo.png";
const App = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Content>
        <h1>Crie sua conta</h1>
      </Content>
    </Container>
  );
};

export default App;
