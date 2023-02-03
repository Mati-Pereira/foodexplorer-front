import { Container, Content, Tags, Text } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailsAnchor from "../../components/DetailsAnchor";
import Tag from "../../components/Tag";

const Details = () => {
  return (
    <Container>
      <Header />
      <DetailsAnchor to="#" />
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
          </Tags>
        </Text>
      </Content>
      <Footer />
    </Container>
  );
};

export default Details;
