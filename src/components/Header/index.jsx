import Anchor from "../Anchor";
import {
  Container,
  Input,
  Logo,
  LogoContainer,
  MenuMobile,
  Pedidos,
  MenuDropdown,
} from "./styles";
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
import PropTypes from "prop-types";
import { setSearch } from "../../context/features/search.slice";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  const favorites = useSelector((state) => state.persisted.favorite.favorites);
  const orders = useSelector((state) => state.persisted.order.orders);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const res = await api.get("/favorites", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
    }
    navigate("/");
  };

  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);

  return (
    <>
      <Container>
        <LogoContainer onClick={handleGoHome}>
          <Logo src={logo} alt="logo" />
          {isAdmin ? <span className="admin-span">admin</span> : null}
        </LogoContainer>
        <Input>
          <BsSearch />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </Input>

        {isAdmin ? (
          <>
            <Anchor to="/favorites">Meus favoritos</Anchor>
            <Anchor to="/add">Novo Prato</Anchor>
            <Pedidos>
              <Anchor to="/orderadminhistory">
                <img src={pedidos} alt="icon pedidos" />
                Todos os Pedidos
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
      <MenuMobile>
        <IoReorderThreeOutline onClick={() => setMenuMobileIsOpen(true)} />
        {menuMobileIsOpen ? (
          <MenuDropdown>
            {isAdmin ? (
              <>
                <span>
                  <AiOutlineClose onClick={() => setMenuMobileIsOpen(false)} />
                  Menu
                </span>
                <Input>
                  <BsSearch />
                  <input
                    type="text"
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setMenuMobileIsOpen(false);
                      }
                    }}
                  />
                </Input>
                <Anchor
                  to="/favorites"
                  onClick={() => setMenuMobileIsOpen(false)}
                >
                  Meus favoritos
                </Anchor>
                <Anchor to="/add" onClick={() => setMenuMobileIsOpen(false)}>
                  Novo Prato
                </Anchor>
                <Anchor
                  to="/orderadminhistory"
                  onClick={() => setMenuMobileIsOpen(false)}
                >
                  Todos os Pedidos
                </Anchor>
                <Anchor onClick={handleSignOut}>Sair</Anchor>
              </>
            ) : (
              <>
                <span>
                  <AiOutlineClose onClick={() => setMenuMobileIsOpen(false)} />
                  Menu
                </span>
                <Input>
                  <BsSearch />
                  <input
                    type="text"
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                  />
                </Input>
                <Anchor
                  to="/favorites"
                  onClick={() => setMenuMobileIsOpen(false)}
                >
                  Meus favoritos
                </Anchor>
                <Anchor
                  to="/ordershistory"
                  onClick={() => setMenuMobileIsOpen(false)}
                >
                  Histórico de pedidos
                </Anchor>
                <Anchor to="/orders" onClick={() => setMenuMobileIsOpen(false)}>
                  Pedidos
                </Anchor>
                <Anchor onClick={handleSignOut}>Sair</Anchor>
              </>
            )}
          </MenuDropdown>
        ) : null}
        <LogoContainer onClick={handleGoHome}>
          <Logo src={logo} alt="logo" />
          {isAdmin ? <span>admin</span> : null}
        </LogoContainer>
        <Anchor to="/orders">
          <img src={pedidos} alt="icon pedidos" />
          <span>{orders.length}</span>
        </Anchor>
      </MenuMobile>
    </>
  );
};

Header.propTypes = {
  setProducts: PropTypes.func,
};

export default Header;
