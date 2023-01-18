import Input from "../../components/Input";
import { Container, Content } from "./styles";
import logo from "/logo.png";
const App = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Content>
        <h1>Crie sua conta</h1>
        <Input />
      </Content>
    </Container>
  );
};

export default App;
