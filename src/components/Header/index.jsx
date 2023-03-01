import Anchor from "../Anchor";
import { Container, Input, Logo, LogoContainer, Pedidos } from "./styles";
import pedidos from "/pedidos.svg";
import sair from "/sair.svg";
import logo from "/logo.svg";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../context/features/auth.thunk";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { cleanFavorites } from "../../context/features/favorites.slice";

const Header = () => {
  const { isAdmin, token } = useSelector((state) => state.persisted.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.persisted.favorite.favorites);
  const orders = useSelector((state) => state.persisted.order.orders);
  const handleSignOut = async () => {
    const res = await api.get("/favorites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (favorites.length > 0) {
      if (!res.data.favoriteList) {
        await api.post(
          "/favorites",
          {
            favoriteList: JSON.stringify(favorites),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await api.put(
          "/favorites",
          {
            favoriteList: JSON.stringify(favorites),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    }
    dispatch(signOut());
    dispatch(cleanFavorites());
    toast.success("Você saiu com sucesso!");
    navigate("/login");
  };

  const handleGoHome = async () => {
    if (favorites.length === 0) {
      await api.put(
        "/favorites",
        {
          favoriteList: JSON.stringify(favorites),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
    navigate("/");
  };

  return (
    <Container>
      <LogoContainer onClick={handleGoHome}>
        <Logo src={logo} alt="logo" />
        {isAdmin ? <span>admin</span> : null}
      </LogoContainer>
      <Input>
        <BsSearch />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </Input>
      {isAdmin ? (
        <>
          <Anchor to="/favorites">Meus favoritos</Anchor>
          <Anchor to="/add">Novo Prato</Anchor>
          <Pedidos>
            <Anchor to="/orderadminhistory">
              <img src={pedidos} alt="icon pedidos" />
              Pedidos (0)
            </Anchor>
          </Pedidos>
        </>
      ) : (
        <>
          <Anchor to="/favorites">Meus favoritos</Anchor>
          <Anchor to="/ordershistory">Histórico de pedidos</Anchor>
          <Pedidos>
            <Anchor to="/orders">
              <img src={pedidos} alt="icon pedidos" />
              Pedidos ({orders.length})
            </Anchor>
          </Pedidos>
        </>
      )}
      <img src={sair} alt="sair icon" onClick={handleSignOut} />
    </Container>
  );
};

export default Header;
