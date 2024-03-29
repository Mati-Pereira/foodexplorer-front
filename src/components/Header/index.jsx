import { useEffect, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Anchor from "../Anchor";
import {
  Container,
  Input,
  Logo,
  LogoContainer,
  MenuMobile,
  Pedidos,
  MenuDropdown,
  Mobile,
} from "./styles";
import pedidos from "/pedidos.svg";
import sair from "/sair.svg";
import logo from "/logo.svg";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../context/features/auth.thunk";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { setSearch } from "../../context/features/search.slice";

const Header = () => {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);

  const { isAdmin } = useSelector((state) => state.persisted.auth);
  const orders = useSelector((state) => state.persisted.order.orders);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    dispatch(signOut());
    toast.success("Você saiu com sucesso!");
    navigate("/login");
  };

  const handleGoHome = async () => {
    navigate("/");
  };

  useEffect(() => {
    if (menuMobileIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuMobileIsOpen]);

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
                    onChange={(e) => dispatch(setSearch(e.target.value)) ?? ""}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setMenuMobileIsOpen(false);
                      }
                    }}
                  />
                </Input>
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
        <Mobile>
          <Logo src={logo} alt="logo" onClick={handleGoHome} />
          {isAdmin ? <span className="admin-span">admin</span> : null}
        </Mobile>
        {!isAdmin ? (
          <Anchor to="/orders">
            <img src={pedidos} alt="icon pedidos" />
            <span>{orders.length}</span>
          </Anchor>
        ) : null}
      </MenuMobile>
    </>
  );
};

Header.propTypes = {
  setProducts: PropTypes.func,
};

export default Header;
