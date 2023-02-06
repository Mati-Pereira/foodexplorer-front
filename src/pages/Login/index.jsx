import Button from "../../components/Button";
import Input from "../../components/Input";
import Anchor from "../../components/Anchor";
import { Container, Content } from "./styles";
import logo from "/logo.svg";
import { useTheme } from "styled-components";
const Login = () => {
  const {
    colors: { red },
  } = useTheme();
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Content>
        <h1>Faça login</h1>
        <Input
          id="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          label="Email"
          form
        />
        <Input
          id="password"
          placeholder="No mínimo 6 caracteres"
          type="password"
          label="Senha"
          form
        />
        <Button text="Criar conta" color={red} />
        <Anchor text="Crie uma Conta" to="/register" />
      </Content>
    </Container>
  );
};

export default Login;
