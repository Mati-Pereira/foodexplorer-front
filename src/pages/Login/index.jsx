import Button from "../../components/Button";
import Input from "../../components/Input";
import Anchor from "../../components/Anchor";
import { Container, Content, Form } from "./styles";
import logo from "/logo.svg";
import { useTheme } from "styled-components";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    colors: { red, white },
  } = useTheme();
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Content>
        <h1>Faça login</h1>
        <Form>
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
          <Button color={red}>
            {" "}
            {isLoading ? (
              <ThreeDots height="80" width="80" radius="9" color={white} />
            ) : (
              "Login"
            )}
          </Button>
        </Form>
        <Anchor text="Crie uma Conta" to="/register" />
      </Content>
    </Container>
  );
};

export default Login;
