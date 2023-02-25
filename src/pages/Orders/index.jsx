import { Container, Content, Pagamentos, Pedidos } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardOrder from "../../components/CardOrder";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.persisted.order.orders);
  const totalPrice = orders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0
  );
  return (
    <Container>
      <Header />
      <Content>
        <Pedidos>
          <h2>Meu pedido</h2>
          {orders.map((order) => (
            <CardOrder
              key={order.id}
              image={order.image}
              quantity={order.quantity}
              name={order.name}
              price={order.price}
            />
          ))}
          <h3>Total: {totalPrice}</h3>
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
