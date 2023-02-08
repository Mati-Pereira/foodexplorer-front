import Anchor from "../Anchor";
import { Container, Input, Logo, Pedidos } from "./styles";
import pedidos from "/pedidos.svg";
import sair from "/sair.svg";
import logo from "/logo.svg";
import { BsSearch } from "react-icons/bs";
import { useAppContext } from "../../context";

const Header = () => {
  const {
    state: { isAdmin },
  } = useAppContext();
  return (
    <Container>
      <div>
        <Logo src={logo} alt="logo" />
        {isAdmin ? <span>admin</span> : null}
      </div>
      <Input>
        <BsSearch />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </Input>
      <Pedidos>
        <img src={pedidos} alt="icon pedidos" />
        <Anchor text="Pedidos (0)" to="#" />
      </Pedidos>
      <img src={sair} alt="sair icon" />
    </Container>
  );
};

export default Header;
