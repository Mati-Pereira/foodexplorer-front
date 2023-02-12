import Button from "../../components/Button";
import Input from "../../components/Input";
import Anchor from "../../components/Anchor";
import { Container, Content, Form } from "./styles";
import logo from "/logo.svg";
import { useTheme } from "styled-components";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../context/features/auth.thunk";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const algo = dispatch(signIn({ email, password }));
  };

  const {
    colors: { red, white },
  } = useTheme();
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Content>
        <h1>Faça login</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            placeholder="No mínimo 6 caracteres"
            min={6}
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color={red}>
            {loading ? (
              <ThreeDots
                color={white}
                wrapperStyle={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              />
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
