import Anchor from "../Anchor";
import { Container, Input, Logo, Pedidos } from "./styles";
import pedidos from "/pedidos.svg";
import sair from "/sair.svg";
import logo from "/logo.svg";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../context/features/auth.thunk";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    dispatch(signOut());
    navigate("/login");
  };

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
      {isAdmin ? (
        <Pedidos>
          <Anchor text="Novo Prato" to="/add" />
        </Pedidos>
      ) : (
        <Pedidos>
          <img src={pedidos} alt="icon pedidos" />
          <Anchor text="Pedidos (0)" to="#" />
        </Pedidos>
      )}
      <img src={sair} alt="sair icon" onClick={handleSignOut} />
    </Container>
  );
};

export default Header;
