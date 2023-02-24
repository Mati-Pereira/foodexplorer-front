import { Container, Content, Pagamentos, Pedidos } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardOrder from "../../components/CardOrder";

const Orders = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Pedidos>
          <h2>Meu pedido</h2>
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </Pedidos>
        <Pagamentos></Pagamentos>
      </Content>
      <Footer />
    </Container>
  );
};

export default Orders;
