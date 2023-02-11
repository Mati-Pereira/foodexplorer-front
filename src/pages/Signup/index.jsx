import { useTheme } from "styled-components";
import Anchor from "../../components/Anchor";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";
import logo from "/logo.svg";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    colors: { red, white },
  } = useTheme();

  const handleSignup = async () => {
    setIsLoading(true);
    console.log(username, email, password);
    await api
      .post("/users", { username, email, password })
      .then(() => toast.success("Cadastro realizado com sucesso!"))
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possivel realizar o cadastro");
        }
      });
    setIsLoading(false);
  };

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
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          label="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          placeholder="No mínimo 6 caracteres"
          min={6}
          type="password"
          label="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color={red} type="submit" onClick={handleSignup}>
          {isLoading ? (
            <ThreeDots height="80" width="80" radius="9" color={white} />
          ) : (
            "Criar conta"
          )}
        </Button>
        <Anchor text="Já tenho uma conta" to="/login" />
      </Content>
    </Container>
  );
};

export default Signup;
