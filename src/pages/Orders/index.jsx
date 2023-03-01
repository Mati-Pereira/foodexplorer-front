import {
  Button,
  Container,
  Content,
  PagamentoHeader,
  Pagamentos,
  Pedidos,
} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardOrder from "../../components/CardOrder";
import { useDispatch, useSelector } from "react-redux";
import Pix from "../../components/Pix";
import CreditCard from "../../components/CreditCard";
import { useEffect, useState } from "react";
import { removeOrder } from "../../context/features/orders.slice";
import { api } from "../../services/api";

const Orders = () => {
  const [payment, setPayment] = useState(false);
  const orders = useSelector((state) => state.persisted.order.orders);
  const totalPrice = orders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const description = orders.map((order) => {
      return `${order.quantity} x ${order.name}, `;
    });
    await api.post("/orders", {
      description: description.join("").slice(0, -2),
    });
  };

  useEffect(() => {
    api
      .get("/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

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
              price={Number(order.price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              onClick={() => dispatch(removeOrder(order))}
            />
          ))}
          <h3>
            Total:{" "}
            {Number(totalPrice).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </Pedidos>
        <Pagamentos>
          <h2>Pagamento</h2>
          <PagamentoHeader>
            <Button onClick={() => setPayment(true)}>
              <img src="/pix.svg" alt="pix-image" />
              PIX
            </Button>
            <Button onClick={() => setPayment(false)}>
              <img src="/creditcard.svg" alt="creditcard-image" />
              Crédito
            </Button>
          </PagamentoHeader>
          {payment ? <Pix /> : <CreditCard onSubmit={handleSubmit} />}
        </Pagamentos>
      </Content>
      <Footer />
    </Container>
  );
};

export default Orders;
