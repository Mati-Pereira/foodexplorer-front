import { Container } from "./styles";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSearch } from "../../context/features/search.slice";
import Anchor from "../Anchor";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  const dispatch = useDispatch();
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
      <IoClose size={45} />
      <p>Menu</p>
      <nav>
        <input
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <Anchor to="#"></Anchor>
        <Anchor to="#"></Anchor>
        <Anchor to="#"></Anchor>
        <Anchor to="#"></Anchor>
        <Anchor to="#"></Anchor>
      </nav>
    </Container>
  );
};

MenuMobile.propTypes = {
  menuIsVisible: PropTypes.bool,
  setMenuIsVisible: PropTypes.func,
};

export default MenuMobile;
