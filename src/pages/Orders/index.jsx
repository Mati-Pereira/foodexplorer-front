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
          <h3>Total R$ 150,00</h3>
        </Pedidos>
        <Pagamentos>
          <h2>Pagamento</h2>
        </Pagamentos>
      </Content>
      <Footer />
    </Container>
  );
};

export default Orders;
