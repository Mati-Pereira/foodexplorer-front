import { AddProduct, Container, Content, Tags, Text } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailsAnchor from "../../components/DetailsAnchor";
import Tag from "../../components/Tag";
import Quantity from "../../components/Quantity";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";

const Details = () => {
  const {
    colors: { red },
  } = useTheme();
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  return (
    <Container>
      <Header />
      <DetailsAnchor to="/" />
      <Content>
        <img src="/Imagens/Mask group-5.png" />
        <Text>
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </p>
          <Tags>
            <Tag text="Olá Mundo" />
            <Tag text="Quero Café" />
            <Tag text="Vamonos" />
            <Tag text="Agora Vais" />
            <Tag text="Top" />
            <Tag text="Miojo" />
            <Tag text="Agora Vais" />
          </Tags>
          {isAdmin ? (
            <AddProduct>
              <Button color={red}>Editar</Button>
            </AddProduct>
          ) : (
            <AddProduct>
              <Quantity quantity={5} />
              <Button color={red}>Incluir</Button>
            </AddProduct>
          )}
        </Text>
      </Content>
      <Footer />
    </Container>
  );
};

Details.propTypes = {
  isAdmin: PropTypes.bool,
};

export default Details;
