import { Container, Content } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailsAnchor from "../../components/DetailsAnchor";

const Details = () => {
  return (
    <Container>
      <Header />
      <DetailsAnchor to="#" />
      <Content></Content>
      <Footer />
    </Container>
  );
};

export default Details;
