import Anchor from "../../components/Anchor";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";
import logo from "/logo.svg";
const Signup = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Content>
        <h1>Crie sua conta</h1>
        <Input
          id="nome"
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          form
        />
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
        <Button text="Criar conta" />
        <Anchor text="Já tenho uma conta" to="/login" />
      </Content>
    </Container>
  );
};

export default Signup;
